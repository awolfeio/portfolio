# Background Overhaul Implementation Plan

## Overview
Replace Vanta.js FOG background with a fully custom WebGL fragment shader solution, providing fine-grained control over visual appearance and per-page configurations.

---

## Goals
1. **Complete replacement** of Vanta.js with custom shader-based background
2. **GUI controls** for real-time parameter tweaking in development mode
3. **Fog-inspired visuals** with flexible appearance (liquid → fog spectrum)
4. **Multi-color system** with controllable blending
5. **Film grain layer** with independent controls
6. **Page-specific configurations** (like current About page behavior)
7. **Performance optimization** for smooth 60fps animation

---

## Technology Stack

### Core Technologies
- **Three.js** - WebGL abstraction, scene management
- **Custom GLSL Shaders** - Fragment shader for visual effects
- **dat.GUI** or **lil-gui** - Development mode parameter controls
- **GSAP** - Smooth transitions between page configurations

### Why Custom Shaders?
- Full creative control over visual output
- Better performance (single draw call vs Vanta's overhead)
- Smaller bundle size (remove Vanta dependency)
- Easier to maintain and extend
- Direct parameter control without library limitations

---

## Architecture

### File Structure
```
src/
├── js/
│   ├── background/
│   │   ├── index.js                    # Main entry, orchestration
│   │   ├── shaders/
│   │   │   ├── fogShader.frag.glsl    # Main fog fragment shader
│   │   │   ├── fogShader.vert.glsl    # Vertex shader (simple passthrough)
│   │   │   └── filmGrain.glsl          # Film grain utility functions
│   │   ├── BackgroundRenderer.js       # Three.js scene setup & rendering
│   │   ├── ShaderController.js         # Shader uniform management
│   │   ├── ConfigManager.js            # Page-specific configs
│   │   └── DevGUI.js                   # GUI controls for dev mode
│   └── background.js                   # Legacy - to be replaced
```

### Component Responsibilities

#### 1. **BackgroundRenderer.js**
- Initialize Three.js scene, camera, renderer
- Create fullscreen quad with custom shader material
- Handle window resize
- Manage render loop (requestAnimationFrame)
- Expose methods: `start()`, `stop()`, `resize()`

#### 2. **ShaderController.js**
- Manage all shader uniforms (colors, noise, speed, etc.)
- Provide methods to update uniforms smoothly
- Handle time-based animations
- Expose API: `updateUniforms()`, `transitionTo(config, duration)`

#### 3. **ConfigManager.js**
- Store predefined configurations per page
- Handle configuration transitions
- Schema validation for configs
- Configs: `default`, `about`, `projects`, etc.

#### 4. **DevGUI.js**
- Initialize lil-gui interface (dev mode only)
- Create folders for each parameter category
- Real-time uniform updates via ShaderController
- Export/import configuration JSON
- Conditional loading (only in dev builds)

---

## Shader Design

### Fragment Shader Features

#### Core Visual Layer: Animated Fog
```glsl
// Pseudo-structure
uniform vec3 u_color1;          // Highlight color
uniform vec3 u_color2;          // Midtone color
uniform vec3 u_color3;          // Lowlight color
uniform vec3 u_baseColor;       // Background base

uniform float u_time;           // Animation time
uniform float u_speed;          // Animation speed multiplier
uniform float u_zoom;           // Noise scale/zoom

// Noise parameters
uniform float u_noiseScale;     // Primary noise scale
uniform float u_noiseOctaves;   // FBM octaves (complexity)
uniform float u_noiseLacunarity;// Frequency multiplier per octave
uniform float u_noiseGain;      // Amplitude multiplier per octave
uniform float u_turbulence;     // Distortion amount (liquid ↔ fog)

// Blending
uniform float u_colorMix1;      // Blend between color1 & color2
uniform float u_colorMix2;      // Blend between result & color3
uniform float u_softness;       // Edge softness/blur factor
```

#### Film Grain Layer
```glsl
uniform float u_grainIntensity; // Grain strength (0-1)
uniform float u_grainSpeed;     // Independent grain animation speed
uniform int u_grainBlendMode;   // 0: overlay, 1: multiply, 2: add, 3: screen
```

#### Noise Implementation
- **Simplex noise** or **Perlin noise** for organic movement
- **Fractional Brownian Motion (FBM)** for multi-scale detail
- **Domain warping** for liquid-like distortion
- Layered noise for depth and complexity

#### Color Blending Strategy
1. Generate base noise value (0-1)
2. Apply FBM for detail
3. Apply domain warping based on turbulence
4. Map noise to color gradient (color1 → color2 → color3)
5. Mix with base color
6. Apply film grain on top

---

## Parameter Categories & Controls

### 1. **Color Controls**
| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `highlightColor` | Color | RGB | `#ADFFF5` | Brightest areas |
| `midtoneColor` | Color | RGB | `#DEC1FF` | Mid-range areas |
| `lowlightColor` | Color | RGB | `#9367FF` | Darkest areas |
| `baseColor` | Color | RGB | `#FFFFFF` | Background base |
| `colorMix1` | Float | 0-1 | 0.5 | Highlight/midtone blend |
| `colorMix2` | Float | 0-1 | 0.5 | Result/lowlight blend |

### 2. **Noise Controls**
| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `zoom` | Float | 0.1-5.0 | 0.5 | Overall noise scale |
| `noiseScale` | Float | 0.5-10.0 | 2.0 | Fine noise scale |
| `octaves` | Int | 1-8 | 4 | FBM complexity |
| `lacunarity` | Float | 1.0-4.0 | 2.0 | Frequency multiplier |
| `gain` | Float | 0.1-1.0 | 0.5 | Amplitude multiplier |
| `turbulence` | Float | 0.0-2.0 | 0.5 | Distortion (0=fog, 2=liquid) |

### 3. **Animation Controls**
| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `speed` | Float | 0.0-2.0 | 0.24 | Main animation speed |
| `directionX` | Float | -1.0-1.0 | 0.5 | Horizontal flow |
| `directionY` | Float | -1.0-1.0 | 0.3 | Vertical flow |

### 4. **Film Grain Controls**
| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `grainIntensity` | Float | 0.0-1.0 | 0.1 | Grain visibility |
| `grainSpeed` | Float | 0.0-5.0 | 1.0 | Grain animation speed |
| `grainSize` | Float | 0.5-5.0 | 2.0 | Grain particle size |
| `grainBlendMode` | Select | 0-3 | 0 | Overlay/Multiply/Add/Screen |

### 5. **Visual Quality**
| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `softness` | Float | 0.0-1.0 | 0.48 | Edge blur factor |
| `contrast` | Float | 0.5-2.0 | 1.0 | Overall contrast |
| `brightness` | Float | 0.5-1.5 | 1.0 | Overall brightness |
| `opacity` | Float | 0.0-1.0 | 0.66 | Canvas opacity |

---

## GUI Implementation

### Dev Mode Detection
```javascript
// In DevGUI.js
const isDev = 
  window.location.hostname === 'localhost' || 
  window.location.search.includes('debug=true');

if (isDev) {
  // Initialize GUI
}
```

### GUI Layout Structure
```
📁 Colors
  ├─ Highlight Color
  ├─ Midtone Color
  ├─ Lowlight Color
  ├─ Base Color
  ├─ Color Mix 1
  └─ Color Mix 2

📁 Noise
  ├─ Zoom
  ├─ Noise Scale
  ├─ Octaves
  ├─ Lacunarity
  ├─ Gain
  └─ Turbulence

📁 Animation
  ├─ Speed
  ├─ Direction X
  └─ Direction Y

📁 Film Grain
  ├─ Intensity
  ├─ Speed
  ├─ Size
  └─ Blend Mode

📁 Visual Quality
  ├─ Softness
  ├─ Contrast
  ├─ Brightness
  └─ Opacity

📁 Presets
  ├─ Load: Default
  ├─ Load: About
  ├─ Save Current Config
  └─ Export JSON
```

### GUI Features
- **Live updates**: Changes reflect immediately
- **Reset buttons**: Per-folder and global reset
- **Preset system**: Quick-load page configurations
- **Export/Import**: Save configs as JSON
- **Collapsible folders**: Organized parameter groups
- **Color pickers**: Visual color selection
- **Keyboard shortcuts**: Toggle GUI visibility (G key)

---

## Page Configuration System

### Configuration Schema
```javascript
// In ConfigManager.js
const pageConfigs = {
  default: {
    colors: {
      highlight: '#ADFFF5',
      midtone: '#DEC1FF',
      lowlight: '#9367FF',
      base: '#FFFFFF',
      colorMix1: 0.5,
      colorMix2: 0.5
    },
    noise: {
      zoom: 0.5,
      noiseScale: 2.0,
      octaves: 4,
      lacunarity: 2.0,
      gain: 0.5,
      turbulence: 0.5
    },
    animation: {
      speed: 0.24,
      directionX: 0.5,
      directionY: 0.3
    },
    filmGrain: {
      intensity: 0.1,
      speed: 1.0,
      size: 2.0,
      blendMode: 0
    },
    visual: {
      softness: 0.48,
      contrast: 1.0,
      brightness: 1.0,
      opacity: 0.66
    }
  },
  
  about: {
    colors: {
      // Same as default
      highlight: '#ADFFF5',
      midtone: '#DEC1FF',
      lowlight: '#9367FF',
      base: '#FFFFFF',
      colorMix1: 0.5,
      colorMix2: 0.5
    },
    noise: {
      zoom: 2.0,           // More zoomed in
      noiseScale: 3.0,     // Larger scale features
      octaves: 5,          // More detail
      lacunarity: 2.2,
      gain: 0.4,
      turbulence: 0.35     // Less turbulent, more fog-like
    },
    animation: {
      speed: 0.6,          // Faster movement
      directionX: 0.3,
      directionY: 0.5
    },
    filmGrain: {
      intensity: 0.15,     // More visible grain
      speed: 1.2,
      size: 1.5,
      blendMode: 0
    },
    visual: {
      softness: 0.35,      // Sharper features
      contrast: 1.1,
      brightness: 1.0,
      opacity: 0.66
    }
  }
};
```

### Transition Logic
```javascript
// In ConfigManager.js
transitionToPage(namespace, duration = 0.6) {
  const targetConfig = pageConfigs[namespace] || pageConfigs.default;
  
  // Use GSAP to smoothly transition uniforms
  shaderController.transitionTo(targetConfig, duration);
}
```

---

## Integration with Barba.js

### Hook into Page Transitions
```javascript
// In src/index.js or main entry point
import { backgroundManager } from './js/background';

barba.hooks.before((data) => {
  // Fade out background
  backgroundManager.fadeOut(0.4);
});

barba.hooks.after((data) => {
  const newNamespace = data.next.namespace;
  
  // Transition to new page config
  backgroundManager.transitionToPage(newNamespace);
  
  // Fade in background
  backgroundManager.fadeIn(0.6);
});
```

### Touch Event Handling
```javascript
// In BackgroundRenderer.js
setupTouchPrevention() {
  const canvas = this.renderer.domElement;
  
  ['touchstart', 'touchmove', 'touchend', 'touchcancel'].forEach(eventType => {
    canvas.addEventListener(eventType, (e) => {
      e.preventDefault();
    }, { passive: false });
  });
}
```

---

## Implementation Phases

### Phase 1: Foundation (Days 1-2)
**Goal**: Basic shader rendering with Three.js

- [ ] Create project structure (folders, files)
- [ ] Set up Three.js scene with fullscreen quad
- [ ] Implement basic fragment shader (solid color test)
- [ ] Implement render loop with time uniform
- [ ] Test canvas rendering in portfolio

**Deliverables**: 
- Working Three.js canvas that replaces Vanta
- Solid color background as proof of concept

---

### Phase 2: Noise & Colors (Days 3-4)
**Goal**: Implement fog-like visual with noise

- [ ] Add noise functions to fragment shader (Simplex/Perlin)
- [ ] Implement FBM (Fractional Brownian Motion)
- [ ] Add color uniforms (highlight, midtone, lowlight, base)
- [ ] Implement color blending based on noise
- [ ] Add basic animation (time-based noise evolution)

**Deliverables**:
- Animated, multi-color fog-like background
- Basic noise parameters exposed

---

### Phase 3: Advanced Noise Controls (Day 5)
**Goal**: Fine-tune noise for liquid ↔ fog spectrum

- [ ] Implement domain warping for distortion
- [ ] Add turbulence parameter
- [ ] Implement zoom and scale controls
- [ ] Add lacunarity and gain for FBM control
- [ ] Test different parameter combinations

**Deliverables**:
- Full control over noise appearance
- Ability to create both liquid and fog-like visuals

---

### Phase 4: Film Grain Layer (Day 6)
**Goal**: Add film grain overlay

- [ ] Implement film grain noise function
- [ ] Add grain uniforms (intensity, speed, size)
- [ ] Implement blend modes (overlay, multiply, add, screen)
- [ ] Layer grain over base fog effect
- [ ] Optimize grain for performance

**Deliverables**:
- Film grain layer with independent controls
- Multiple blend modes for different aesthetics

---

### Phase 5: Dev GUI (Days 7-8)
**Goal**: Create development interface

- [ ] Install and set up lil-gui
- [ ] Create DevGUI.js with conditional loading
- [ ] Add all parameter controls (colors, noise, animation, grain)
- [ ] Organize into collapsible folders
- [ ] Implement real-time uniform updates
- [ ] Add preset system (load default/about configs)
- [ ] Add export/import JSON functionality

**Deliverables**:
- Fully functional GUI for parameter tweaking
- Preset loading and config export

---

### Phase 6: Configuration System (Day 9)
**Goal**: Page-specific configurations

- [ ] Create ConfigManager.js
- [ ] Define default and about page configs
- [ ] Implement smooth transitions between configs (GSAP)
- [ ] Add transition methods to ShaderController
- [ ] Test config transitions

**Deliverables**:
- Working page configuration system
- Smooth transitions between page styles

---

### Phase 7: Barba.js Integration (Day 10)
**Goal**: Connect to existing page transitions

- [ ] Update background.js export API
- [ ] Add hooks to Barba.js transition lifecycle
- [ ] Implement fadeOut/fadeIn methods
- [ ] Migrate namespace detection logic
- [ ] Add touch event prevention
- [ ] Test all page transitions (home → about, etc.)

**Deliverables**:
- Full integration with existing Barba.js setup
- Smooth background transitions on page changes

---

### Phase 8: Optimization & Polish (Days 11-12)
**Goal**: Performance and visual refinement

- [ ] Profile shader performance (FPS monitoring)
- [ ] Optimize shader code (reduce instructions)
- [ ] Test on mobile devices
- [ ] Adjust default parameters for best look
- [ ] Fine-tune about page configuration
- [ ] Add fallback for WebGL unsupported browsers
- [ ] Implement quality settings (low/medium/high)

**Deliverables**:
- 60fps performance on target devices
- Polished default and about configurations
- Mobile optimization

---

### Phase 9: Testing & Cleanup (Day 13)
**Goal**: Final testing and code cleanup

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Chrome Mobile)
- [ ] Test all page transitions
- [ ] Remove Vanta.js dependency from package.json
- [ ] Remove old background.js code
- [ ] Update documentation
- [ ] Code review and cleanup

**Deliverables**:
- Production-ready background system
- Removed Vanta dependency
- Clean codebase

---

### Phase 10: Production Build (Day 14)
**Goal**: Deploy to production

- [ ] Build production bundle (without GUI)
- [ ] Test production build
- [ ] Verify bundle size reduction
- [ ] Deploy to production
- [ ] Monitor performance
- [ ] Final adjustments if needed

**Deliverables**:
- Deployed custom shader background
- Performance metrics
- Smaller bundle size

---

## Performance Considerations

### Target Metrics
- **60 FPS** on desktop (consistent)
- **30-60 FPS** on mobile (acceptable range)
- **Bundle size reduction**: ~50-100KB (removing Vanta)
- **First paint**: No impact vs current implementation

### Optimization Strategies
1. **Shader optimization**:
   - Minimize texture lookups
   - Reduce branching (if/else in GLSL)
   - Use built-in functions (mix, smoothstep, etc.)
   - Precalculate values in vertex shader when possible

2. **Render optimization**:
   - Single fullscreen quad (minimal geometry)
   - No post-processing (effects in main shader)
   - Pause rendering when tab inactive
   - Reduce quality on low-end devices

3. **Code splitting**:
   - GUI only in dev builds
   - Lazy load GSAP if not used elsewhere

4. **Mobile optimization**:
   - Detect device capability
   - Reduce octaves on mobile
   - Lower resolution on small screens
   - Disable grain on low-end devices

---

## Fallback Strategy

### WebGL Not Supported
```javascript
// In BackgroundRenderer.js
if (!isWebGLAvailable()) {
  // Apply CSS gradient fallback
  viewport.style.background = `
    linear-gradient(135deg, 
      #ADFFF5 0%, 
      #DEC1FF 50%, 
      #9367FF 100%
    )
  `;
  return;
}
```

### Performance Fallback
```javascript
// In BackgroundRenderer.js
if (averageFPS < 30) {
  // Reduce quality automatically
  shaderController.setQuality('low');
}
```

---

## Success Criteria

### Functional Requirements
- ✅ Custom shader background renders correctly
- ✅ All parameters controllable via GUI in dev mode
- ✅ Smooth transitions between page configurations
- ✅ Film grain layer works with all blend modes
- ✅ Appearance adjustable from liquid to fog
- ✅ Integration with Barba.js page transitions

### Performance Requirements
- ✅ 60 FPS on desktop (Chrome, Firefox, Safari, Edge)
- ✅ 30+ FPS on modern mobile devices
- ✅ Bundle size reduced vs Vanta implementation
- ✅ No visual glitches or artifacts

### Visual Requirements
- ✅ Matches or exceeds Vanta fog aesthetic
- ✅ About page config visually distinct from default
- ✅ Smooth, organic movement
- ✅ Customizable color palettes
- ✅ Film grain adds texture without overwhelming

### Code Quality Requirements
- ✅ Well-organized, modular code structure
- ✅ Clear separation of concerns
- ✅ Commented shader code
- ✅ Documented configuration schema
- ✅ No console errors or warnings

---

## Future Enhancements

### Post-Launch Ideas
1. **Additional presets**: Create more page-specific styles
2. **Interactive mode**: Mouse/touch influence on noise
3. **Color animation**: Slowly shifting color palettes over time
4. **Particle layer**: Add subtle particles floating through fog
5. **Depth parallax**: Multiple fog layers with parallax effect
6. **Audio reactivity**: Respond to music/sound (optional)
7. **Seasonal themes**: Auto-switch configs based on season/time

### Advanced Features
- **Ray marching**: For volumetric 3D fog effect
- **Custom blend modes**: More blending options for grain
- **Texture overlay**: Optional texture mapping
- **Shape masks**: Mask fog with shapes/images
- **Multiple render passes**: For more complex effects

---

## Risk Assessment

### Technical Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Performance issues on mobile | Medium | High | Early mobile testing, quality fallbacks |
| Shader complexity too high | Low | Medium | Iterative development, profiling |
| Cross-browser incompatibilities | Low | Medium | Early cross-browser testing |
| Integration issues with Barba | Low | High | Phase 7 dedicated to integration |

### Timeline Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Shader development takes longer | Medium | Medium | Buffer time in phases, incremental approach |
| GUI implementation complex | Low | Low | Use proven library (lil-gui) |
| Configuration system needs revision | Low | Medium | Clear schema from start |

---

## Dependencies

### Required Packages
- `three` (already installed) - WebGL/shader rendering
- `lil-gui` (new) - Dev mode GUI controls
- `gsap` (already installed) - Smooth parameter transitions

### Development Tools
- GLSL syntax highlighter (IDE extension)
- Chrome DevTools for shader debugging
- FPS monitoring tool

### Package.json Updates
```json
{
  "dependencies": {
    "three": "^0.x.x",
    "gsap": "^3.x.x"
  },
  "devDependencies": {
    "lil-gui": "^0.19.0"
  }
}
```

**Remove after migration**:
```json
"vanta": "^0.x.x"  // DELETE
```

---

## Resources

### GLSL Shader Resources
- [The Book of Shaders](https://thebookofshaders.com/) - Comprehensive GLSL guide
- [Shadertoy](https://www.shadertoy.com/) - Inspiration and examples
- [Inigo Quilez Articles](https://iquilezles.org/articles/) - Advanced techniques

### Noise Algorithms
- [Simplex Noise Implementation](https://github.com/ashima/webgl-noise)
- [Perlin Noise for GLSL](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83)
- [Domain Warping](https://iquilezles.org/articles/warp/)

### Three.js
- [Three.js Documentation](https://threejs.org/docs/)
- [Custom Shader Materials](https://threejs.org/docs/#api/en/materials/ShaderMaterial)

### GUI
- [lil-gui GitHub](https://github.com/georgealways/lil-gui)
- [lil-gui Documentation](https://lil-gui.georgealways.com/)

---

## Conclusion

This plan provides a comprehensive roadmap for replacing Vanta.js with a custom shader-based background system. The phased approach ensures incremental progress with clear deliverables at each stage. The dev GUI will enable rapid iteration and fine-tuning, while the configuration system maintains the flexible, page-specific styling already in place.

**Estimated Total Time**: 14 days
**Key Benefits**: 
- Full creative control
- Better performance
- Smaller bundle size  
- Easier maintenance
- Extensible for future features

**Next Steps**: 
1. Review and approve plan
2. Install lil-gui dependency
3. Begin Phase 1: Foundation setup

