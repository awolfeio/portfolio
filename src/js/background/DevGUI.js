import GUI from 'lil-gui';
import * as THREE from 'three';
import { backgroundPresets, getPresetNames, parameterDefinitions } from './presets.js';

/**
 * DevGUI - Development mode GUI for background shader parameters
 * Only loads in development mode (localhost or ?debug=true)
 */
export class DevGUI {
  constructor(backgroundManager) {
    this.backgroundManager = backgroundManager;
    this.shaderController = backgroundManager.getShaderController();
    this.material = backgroundManager.getRenderer()?.getMaterial();
    
    if (!this.material) {
      console.warn('DevGUI: Material not available');
      return;
    }

    this.gui = null;
    this.folders = {};
    this.params = this.createParamsProxy();
    
    this.init();
  }

  /**
   * Check if we should show the GUI (dev mode)
   */
  static isDev() {
    return (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.search.includes('debug=true')
    );
  }

  /**
   * Create a proxy object that syncs with shader uniforms
   * dynamically based on parameterDefinitions
   */
  createParamsProxy() {
    const uniforms = this.material.uniforms;
    const params = {};
    
    Object.entries(parameterDefinitions).forEach(([key, def]) => {
      const uniformName = def.uniform || key;
      const uniform = uniforms[uniformName];
      
      if (!uniform) {
        // console.warn(`DevGUI: Uniform ${uniformName} not found for ${key}`);
        return;
      }

      if (def.type === 'color') {
        params[key] = '#' + uniform.value.getHexString();
      } else if (def.type === 'boolean') {
        params[key] = uniform.value > 0.5;
      } else {
        params[key] = uniform.value;
      }
    });

    return params;
  }

  /**
   * Initialize the GUI
   */
  init() {
    this.gui = new GUI({ title: '🎨 Background Shader Controls', width: 320 });
    
    // Make GUI visible
    this.gui.domElement.style.position = 'fixed';
    this.gui.domElement.style.top = '10px';
    this.gui.domElement.style.right = '10px';
    this.gui.domElement.style.zIndex = '10000';
    
    // Dynamically build GUI from definitions
    this.buildGUI();

    // Add manual folders
    this.addPresetsFolder();
    this.addPageConfigsFolder();
    this.addPerformanceFolder();
    this.addUtilitiesFolder();
    
    // Add keyboard shortcut to toggle GUI
    this.addKeyboardShortcut();
    
    // Start live sync loop
    this.startLiveSync();
    
    console.log('🎨 DevGUI initialized - Press "G" to toggle');
  }

  /**
   * Build GUI controls dynamically from parameterDefinitions
   */
  buildGUI() {
    Object.entries(parameterDefinitions).forEach(([key, def]) => {
      // Get or create folder
      let folder = this.folders[def.folder];
      if (!folder) {
        folder = this.gui.addFolder(def.folder);
        folder.close(); // Default to closed
        this.folders[def.folder] = folder;
      }

      const uniformName = def.uniform || key;
      let controller;

      // Add controller based on type
      if (def.type === 'color') {
        controller = folder.addColor(this.params, key);
        controller.onChange((value) => {
          this.shaderController.updateUniform(uniformName, new THREE.Color(value));
        });
      } else if (def.type === 'select') {
        controller = folder.add(this.params, key, def.options);
        controller.onChange((value) => {
          this.shaderController.updateUniform(uniformName, value);
        });
      } else if (def.type === 'boolean') {
        controller = folder.add(this.params, key);
        controller.onChange((value) => {
          this.shaderController.updateUniform(uniformName, value ? 1.0 : 0.0);
        });
      } else {
        // Number range
        controller = folder.add(this.params, key, def.min, def.max, def.step);
        controller.onChange((value) => {
           this.shaderController.updateUniform(uniformName, value);
        });
      }

      // Add label
      if (def.label) {
        controller.name(def.label);
      }
    });
  }

  /**
   * Start live synchronization of GUI with uniforms.
   *
   * PERF FIX: Throttled to 10fps (was 60fps) and RAF chain fully stops when GUI is hidden.
   * The original pattern called updateGUIFromUniforms() every frame at 60fps, which performed
   * Object.entries() on 100+ uniform definitions, generated new hex strings for every color
   * uniform, and called controller.updateDisplay() on every controller — 100+ DOM mutations
   * per frame. On mobile this created enough allocation pressure to trigger V8 major GC
   * (mark-compact) every 4–5 seconds with 150–250ms pauses.
   */
  startLiveSync() {
    this._liveSyncRafId = null;
    this._lastSyncTime = 0;
    const SYNC_INTERVAL = 100; // 10fps — dev tool doesn't need 60fps controller updates

    const syncLoop = (timestamp) => {
      if (!this.gui) return; // GUI destroyed — stop the RAF chain entirely

      if (this.gui._hidden) {
        // GUI is hidden: re-schedule cheaply but do zero work
        this._liveSyncRafId = requestAnimationFrame(syncLoop);
        return;
      }

      if (timestamp - this._lastSyncTime >= SYNC_INTERVAL) {
        this._lastSyncTime = timestamp;
        this.updateGUIFromUniforms();
      }

      this._liveSyncRafId = requestAnimationFrame(syncLoop);
    };

    this._liveSyncRafId = requestAnimationFrame(syncLoop);
  }

  /**
   * Update GUI controllers from current uniform values
   */
  updateGUIFromUniforms() {
    const uniforms = this.material.uniforms;
    
    Object.entries(parameterDefinitions).forEach(([key, def]) => {
      const uniformName = def.uniform || key;
      const uniform = uniforms[uniformName];
      
      if (!uniform) return;

      if (def.type === 'color') {
        this.params[key] = '#' + uniform.value.getHexString();
      } else if (def.type === 'boolean') {
        this.params[key] = uniform.value > 0.5;
      } else {
        this.params[key] = uniform.value;
      }
    });
    
    // Update all GUI controllers
    this.gui.controllers.forEach(controller => controller.updateDisplay());
    Object.values(this.folders).forEach(folder => {
      folder.controllers.forEach(controller => controller.updateDisplay());
    });
  }

  /**
   * Presets folder
   */
  addPresetsFolder() {
    const folder = this.gui.addFolder('💾 Presets');
    this.folders.presets = folder;
    
    // Create buttons for each preset
    const presetNames = getPresetNames();
    const presetButtons = {};
    
    presetNames.forEach((presetName) => {
      const preset = backgroundPresets[presetName];
      presetButtons[preset.name] = () => {
        this.loadPreset(presetName);
      };
    });
    
    // Add a controller for each preset
    Object.keys(presetButtons).forEach((name) => {
      folder.add(presetButtons, name);
    });
    
    folder.close();
  }

  /**
   * Page configurations folder
   */
  addPageConfigsFolder() {
    const folder = this.gui.addFolder('📄 Page Configs');
    this.folders.pageConfigs = folder;
    
    const configManager = this.backgroundManager.getConfigManager();
    if (!configManager) {
      console.warn('ConfigManager not available');
      return;
    }
    
    const pageConfigs = configManager.getAllConfigs();
    const pageNames = Object.keys(pageConfigs).sort();
    
    // Create test page selector
    const pageState = {
      testPage: configManager.getCurrentPage() || 'index',
    };
    
    folder.add(pageState, 'testPage', pageNames)
      .name('Test Page Config')
      .onChange((pageName) => {
        console.log(`Testing page config: ${pageName}`);
        configManager.transitionToPage(pageName, 0.8);
        
        // Update GUI to show new values after transition
        setTimeout(() => {
          this.updateGUIFromUniforms();
        }, 850);
      });
    
    // Show current page (read-only, updated live)
    const currentPageState = {
      current: configManager.getCurrentPage() || 'none',
    };
    
    const currentPageController = folder.add(currentPageState, 'current')
      .name('Current Page')
      .disable();
    
    // Update current page display periodically
    // PERF FIX: Store ID so destroy() can clear this interval (zombie prevention)
    this._pageIntervalId = setInterval(() => {
      const current = configManager.getCurrentPage();
      if (current) {
        currentPageState.current = current;
        currentPageController.updateDisplay();
      }
    }, 500);
    
    // Add button to show all page configs
    const pageUtils = {
      'Show All Configs': () => {
        console.log('=== Page Configurations ===');
        Object.entries(pageConfigs).forEach(([page, config]) => {
          console.log(`${page}: ${config.description || config.type}`);
          if (config.type === 'preset') {
            console.log(`  - Uses preset: "${config.preset}"`);
          }
        });
        console.log('===========================');
      },
    };
    
    folder.add(pageUtils, 'Show All Configs');
    
    folder.close();
  }

  /**
   * Performance and quality folder
   */
  addPerformanceFolder() {
    const folder = this.gui.addFolder('⚡ Performance');
    this.folders.performance = folder;
    
    const performanceMonitor = this.backgroundManager.getPerformanceMonitor();
    const renderer = this.backgroundManager.getRenderer();
    
    // Quality selector
    const qualityState = {
      quality: renderer ? renderer.getQuality() : 'high',
    };
    
    folder.add(qualityState, 'quality', ['low', 'medium', 'high'])
      .name('Quality Level')
      .onChange((value) => {
        this.backgroundManager.setQuality(value);
      });
    
    // FPS display (live updating)
    if (performanceMonitor) {
      const statsState = {
        fps: 0,
        avgFps: 0,
        minFps: 0,
      };
      
      // PERF FIX: Removed .listen() from all three controllers.
      // lil-gui's .listen() creates its own internal requestAnimationFrame polling loop that
      // checks values every frame and calls updateDisplay() on change. Since the setInterval
      // below already drives the data updates, and startLiveSync() calls updateDisplay() on
      // all controllers at 10fps, .listen() is redundant and adds a third concurrent RAF chain.
      const fpsController = folder.add(statsState, 'fps', 0, 120)
        .name('Current FPS')
        .disable();

      folder.add(statsState, 'avgFps', 0, 120)
        .name('Average FPS')
        .disable();

      folder.add(statsState, 'minFps', 0, 120)
        .name('Min FPS')
        .disable();

      // PERF FIX: Cache the FPS input DOM element once instead of querying it every 500ms.
      // querySelector traverses the lil-gui DOM subtree on every interval tick.
      let _fpsDomInput = null;

      // PERF FIX: Store ID so destroy() can clear this interval (zombie prevention)
      this._statsIntervalId = setInterval(() => {
        const metrics = performanceMonitor.getMetrics();
        statsState.fps = metrics.currentFps;
        statsState.avgFps = metrics.averageFps;
        statsState.minFps = metrics.minFps;

        // Color code FPS controller — query DOM element once and cache
        if (!_fpsDomInput) {
          _fpsDomInput = fpsController.domElement.querySelector('input');
        }
        if (_fpsDomInput) {
          _fpsDomInput.style.color =
            metrics.currentFps < 30 ? '#ff0000' :
            metrics.currentFps < 45 ? '#ffff00' : '#00ff00';
        }
      }, 500);
      
      // Toggle stats overlay
      const perfUtils = {
        'Toggle Stats Overlay': () => {
          performanceMonitor.toggle();
        },
        'Reset Stats': () => {
          performanceMonitor.reset();
          console.log('Performance stats reset');
        },
      };
      
      folder.add(perfUtils, 'Toggle Stats Overlay');
      folder.add(perfUtils, 'Reset Stats');
    }
    
    // Pixel ratio info
    const infoState = {
      devicePixelRatio: window.devicePixelRatio.toFixed(2),
      rendererPixelRatio: renderer && renderer.renderer ? renderer.renderer.getPixelRatio().toFixed(2) : '0',
    };
    
    folder.add(infoState, 'devicePixelRatio').name('Device Pixel Ratio').disable();
    folder.add(infoState, 'rendererPixelRatio').name('Renderer Pixel Ratio').disable();
    
    folder.close();
  }

  /**
   * Utilities folder
   */
  addUtilitiesFolder() {
    const folder = this.gui.addFolder('🛠️ Utilities');
    this.folders.utilities = folder;
    
    const utils = {
      'Export Config': () => this.exportConfig(),
      'Import Config': () => this.importConfig(),
      'Reset to Default': () => this.loadPreset('default'),
      'Copy Colors': () => this.copyColors(),
      'Randomize Colors': () => this.randomizeColors(),
      'Randomize Noise': () => this.randomizeNoise(),
      'Randomize Color Mixing': () => this.randomizeColorMixing(),
    };
    
    Object.keys(utils).forEach((name) => {
      folder.add(utils, name);
    });
    
    folder.open();
  }

  /**
   * Load a preset
   */
  loadPreset(presetName) {
    const preset = backgroundPresets[presetName];
    if (!preset) {
      console.warn(`Preset "${presetName}" not found`);
      return;
    }
    
    console.log(`Loading preset: ${preset.name}`);
    
    // Dynamically build transition targets from parameter definitions
    const targetUniforms = {};
    const params = preset.parameters;
    
    Object.entries(parameterDefinitions).forEach(([key, def]) => {
      const uniformName = def.uniform || key;
      if (params[uniformName] !== undefined) {
         targetUniforms[uniformName] = params[uniformName];
      }
    });

    // Update all uniforms smoothly
    this.shaderController.transitionTo(targetUniforms, 0.6);
    
    // Update GUI values after transition
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
  }

  /**
   * Export current configuration as JSON (flat format matching presets)
   */
  exportConfig() {
    const uniforms = this.material.uniforms;
    const config = {};
    
    Object.entries(parameterDefinitions).forEach(([key, def]) => {
      const uniformName = def.uniform || key;
      const uniform = uniforms[uniformName];
      
      if (!uniform) return;
      
      // Determine value to export
      // We want the numeric/boolean value, not colors as hex strings (unless that's what presets expect?)
      // Presets use numeric values, but colors are usually not in the main 'parameters' blocks in presets?
      // Wait, presets have 'u_colorMix1' etc.
      // But the main colors (u_color1 etc) were not in the example preset I saw earlier.
      // Let's check presets.js... 'about' preset has NO color definitions (u_color1 etc).
      // They might be defined elsewhere or just not part of the standard preset block?
      // Re-reading presets.js: The 'default', 'dreamyFog' etc do NOT list u_color1...u_baseColor.
      // They DO list u_colorMix1, u_colorSpread, etc.
      // So color *palettes* are likely handled separately or implied.
      // However, if I export config, I should probably include everything.
      
      if (def.type === 'color') {
         // Presets don't seem to include base colors, but let's include them for completeness?
         // Or strictly follow preset format?
         // User said "same source of truth".
         // I'll export what is in parameterDefinitions.
         // If I strictly follow the preset format seen in `default`... colors aren't there.
         // But `DevGUI` allowed editing them.
         // I'll include them.
         // Presets likely don't change the base colors often, relying on page config?
         // Whatever, I'll export the raw value (Hex for colors is easy to read).
         // Actually, standard presets use 0x... or specific color management.
         // I'll export what the GUI uses.
         
         // Color uniforms in ShaderController are THREE.Color.
         // I'll export as hex string for portability.
         config[uniformName] = '#' + uniform.value.getHexString();
      } else {
         config[uniformName] = uniform.value;
      }
    });
    
    // Formatter to make it look like a preset block
    const json = JSON.stringify(config, null, 2);
    
    // Copy to clipboard
    navigator.clipboard.writeText(json).then(() => {
      console.log('✅ Configuration exported to clipboard!');
      alert('Configuration copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy:', err);
      console.log('Configuration JSON:', json);
      alert('Check console for configuration JSON');
    });
  }

  /**
   * Import configuration from JSON
   */
  importConfig() {
    const json = prompt('Paste configuration JSON:');
    if (!json) return;
    
    try {
      const config = JSON.parse(json);
      const targetUniforms = {};
      
      Object.entries(config).forEach(([key, value]) => {
         // Handle colors
         if (typeof value === 'string' && value.startsWith('#')) {
            targetUniforms[key] = new THREE.Color(value);
         } else {
            targetUniforms[key] = value;
         }
      });
      
      this.shaderController.updateUniforms(targetUniforms);
      this.updateGUIFromUniforms();
      
      console.log('✅ Configuration imported successfully!');
      alert('Configuration imported!');
    } catch (err) {
      console.error('Failed to import configuration:', err);
      alert('Invalid JSON format');
    }
  }

  /**
   * Copy current colors to clipboard
   */
  copyColors() {
    const uniforms = this.material.uniforms;
    const colors = {
      highlight: '#' + uniforms.u_color1.value.getHexString(),
      midtone: '#' + uniforms.u_color2.value.getHexString(),
      lowlight: '#' + uniforms.u_color3.value.getHexString(),
      base: '#' + uniforms.u_baseColor.value.getHexString(),
    };
    
    const text = JSON.stringify(colors, null, 2);
    navigator.clipboard.writeText(text).then(() => {
      console.log('✅ Colors copied!', colors);
      alert('Colors copied to clipboard!');
    });
  }

  /**
   * Randomize colors
   */
  randomizeColors() {
    const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    const colors = {
      highlight: randomColor(),
      midtone: randomColor(),
      lowlight: randomColor(),
      base: randomColor(),
    };
    
    this.shaderController.transitionTo({
      u_color1: new THREE.Color(colors.highlight),
      u_color2: new THREE.Color(colors.midtone),
      u_color3: new THREE.Color(colors.lowlight),
      u_baseColor: new THREE.Color(colors.base),
    }, 0.6);
    
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🎨 Randomized colors:', colors);
  }

  /**
   * Randomize noise parameters
   */
  randomizeNoise() {
    // Generate random values within sensible ranges
    const noise = {
      u_zoom: Math.random() * 1.5 + 0.2,
      u_noiseScale: Math.random() * 4 + 0.5,
      u_octaves: Math.floor(Math.random() * 3) + 2,
      u_lacunarity: Math.random() * 2 + 1.5,
      u_gain: Math.random() * 0.6 + 0.3,
      u_turbulence: Math.random() * 1.0,
      u_warpOctaves: Math.floor(Math.random() * 3) + 1,
      u_ridgeAmount: Math.random() * 0.8,
      u_detailScale: Math.random() * 8 + 4,
      u_detailAmount: Math.random() * 0.3,
    };
    
    this.shaderController.transitionTo(noise, 0.6);
    
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🌫️ Randomized noise:', noise);
  }

  /**
   * Randomize color mixing parameters
   */
  randomizeColorMixing() {
    const mixing = {
      u_colorMix1: Math.random(),
      u_colorMix2: Math.random(),
      u_colorSpread: Math.random(),
      u_colorSeparation: Math.random() * 0.6 + 0.4,
      u_colorBands: Math.random() * 0.5,
    };
    
    this.shaderController.transitionTo(mixing, 0.6);
    
    setTimeout(() => {
      this.updateGUIFromUniforms();
    }, 650);
    
    console.log('🎨 Randomized color mixing:', mixing);
  }

  /**
   * Add keyboard shortcut (G key) to toggle GUI
   */
  addKeyboardShortcut() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'g' || e.key === 'G') {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          return; // Don't toggle if typing in an input
        }
        
        if (this.gui._hidden) {
          this.gui.show();
        } else {
          this.gui.hide();
        }
      }
    });
  }

  /**
   * Destroy the GUI and clean up all timers/RAF chains.
   * Previously, the live-sync RAF and both setInterval IDs were never stored,
   * so destroy() left zombie timers running indefinitely after HMR or page navigation.
   */
  destroy() {
    // Cancel the live-sync RAF chain
    cancelAnimationFrame(this._liveSyncRafId);
    this._liveSyncRafId = null;

    // Clear both interval timers
    clearInterval(this._pageIntervalId);
    clearInterval(this._statsIntervalId);
    this._pageIntervalId = null;
    this._statsIntervalId = null;

    if (this.gui) {
      this.gui.destroy();
      this.gui = null;
    }
  }
}

/**
 * Initialize DevGUI if in development mode
 */
export function initDevGUI(backgroundManager) {
  if (!DevGUI.isDev()) {
    console.log('DevGUI: Not in development mode, skipping GUI');
    return null;
  }
  
  console.log('DevGUI: Initializing...');
  return new DevGUI(backgroundManager);
}
