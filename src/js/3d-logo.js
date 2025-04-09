import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as dat from "dat.gui";

export function initExtrudedLogo() {
  console.log("Initializing 3D extruded logo");

  // Store GUI instance for cleanup
  let gui = null;

  // Get the container for the 3D logo
  const container = document.querySelector("#loading-splash .logo-wrapper");
  if (!container) {
    console.error("Logo wrapper not found");
    return;
  }

  // Define logo dimensions based on the NewLogo.svg viewBox
  const logoWidth = 186;
  const logoHeight = 71;

  // Add a fallback removal function
  let removeFallbackFn = null;

  // Create a simple fallback animation as a backup
  function setupFallbackAnimation() {
    console.log("Setting up fallback SVG animation");

    // Create an img element as fallback
    const fallbackImg = document.createElement("img");
    fallbackImg.src = "src/assets/logo/NewLogo.svg";
    fallbackImg.alt = "Logo";
    fallbackImg.width = logoWidth;
    fallbackImg.height = logoHeight;
    fallbackImg.classList.add("fallback-animated");
    container.appendChild(fallbackImg);

    // Add a subtle pulse animation
    const style = document.createElement("style");
    style.textContent = `
      .fallback-animated {
        animation: pulse 2s infinite ease-in-out;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);

    removeFallbackFn = function () {
      if (container.contains(fallbackImg)) {
        container.removeChild(fallbackImg);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };

    return {
      dispose: () => {
        if (removeFallbackFn) {
          removeFallbackFn();
        }
      },
    };
  }

  // Try to create a WebGL renderer
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      physicallyCorrectLights: true,
    });
    renderer.setClearColor(0x000000, 0); // Set clear color with 0 opacity (transparent)
    console.log("WebGL renderer created successfully");
  } catch (error) {
    console.error("Failed to create WebGL renderer:", error);
    return setupFallbackAnimation();
  }

  // Create a scene for our 3D logo
  const scene = new THREE.Scene();

  // Create an environment map for reflections without making it visible as background
  const envMapTexture = new THREE.CubeTextureLoader().load([
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==", // simple blue-ish pixel
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==", // simple darker blue pixel
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==", // simple light pixel
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==", // simple darker blue pixel
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==", // simple blue-ish pixel
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==", // simple darker blue pixel
  ]);

  // Use environment map for reflections but keep background transparent
  scene.environment = envMapTexture;
  scene.background = null; // Transparent background

  // Create a camera with perspective
  const camera = new THREE.PerspectiveCamera(
    40, // Reduced FOV for more "zoomed in" look
    logoWidth / logoHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
  );
  camera.position.z = 200; // Adjusted for better framing

  // Material for the extruded shapes
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.8,
    roughness: 0.365,
    transmission: 0.98, // Higher transmission for more transparency
    thickness: 4.0, // Thickness for refraction
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    clearcoat: 1.0,
    clearcoatRoughness: 1.0,
    envMapIntensity: 1.2, // Explicitly set to match settings.glass.envMapIntensity
    ior: 2.25, // Index of refraction (glass is typically 1.5)
    premultipliedAlpha: true, // Better transparency handling
  });

  // Add environment map for realistic reflections
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    encoding: THREE.sRGBEncoding,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  cubeRenderTarget.texture.type = THREE.HalfFloatType;

  // Create cube camera for environment mapping
  const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
  scene.add(cubeCamera);

  // Use the environment map for the material
  material.envMap = cubeRenderTarget.texture;

  // Create a group to hold all the shapes
  const group = new THREE.Group();

  // Extrude settings with a smaller depth for more elegance
  const extrudeSettings = {
    depth: 12, // Increased depth for more visible extrusion
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelSegments: 5,
  };

  // Center the group in the scene
  scene.add(group);

  // Settings object for GUI controls
  const settings = {
    camera: {
      positionZ: 294,
      fov: 20,
    },
    logo: {
      scale: 0.8,
      rotationX: 0.3,
      rotationY: 0,
      rotationZ: 0,
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      extrudeDepth: 16,
      bobbing: true,
      bobbingSpeed: 0.5,
      bobbingAmount: 9.3,
      rotationSpeed: 0.0,
      oscillateX: true,
      oscillateXSpeed: 0.85,
      oscillateXMin: -0.23,
      oscillateXMax: 0.27,
      oscillateY: true,
      oscillateYSpeed: 0.9,
      oscillateYMin: -0.15,
      oscillateYMax: 0.45,
    },
    colors: {
      material: "#ffffff",
      ambient: "#ffffff",
      directional: "#93d8ff",
      point: "#ffffff",
      back: "#aaaaff",
    },
    lighting: {
      ambientIntensity: 0.3,
      directionalIntensity: 0.8,
      pointIntensity: 0.7,
      backIntensity: 0.5,
    },
    glass: {
      metalness: 0.8,
      roughness: 0.365,
      transmission: 0.98,
      thickness: 4.0,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 1.0,
      ior: 2.25,
      envMapIntensity: 1.2,
    },
    resetCamera: function () {
      this.camera.positionZ = 294;
      this.camera.fov = 20;
      updateCamera();
    },
    resetLogo: function () {
      this.logo.scale = 0.8;
      this.logo.rotationX = 0.3;
      this.logo.rotationY = 0;
      this.logo.rotationZ = 0;
      this.logo.positionX = -22;
      this.logo.positionY = 0;
      this.logo.positionZ = 0;
      this.logo.rotationSpeed = 0.0;
      this.logo.oscillateX = true;
      this.logo.oscillateXSpeed = 0.5;
      this.logo.oscillateXMin = -0.23;
      this.logo.oscillateXMax = 0.3;
      this.logo.oscillateY = true;
      this.logo.oscillateYSpeed = 0.3;
      this.logo.oscillateYMin = -0.1;
      this.logo.oscillateYMax = 0.15;
      updateLogoTransform();
    },
    resetGlass: function () {
      this.glass.metalness = 0.8;
      this.glass.roughness = 0.365;
      this.glass.transmission = 0.98;
      this.glass.thickness = 4.0;
      this.glass.opacity = 0.85;
      this.glass.clearcoat = 1.0;
      this.glass.clearcoatRoughness = 1.0;
      this.glass.ior = 2.25;
      this.glass.envMapIntensity = 1.2;

      // Force update the material
      updateGlassMaterial();

      // Ensure the update takes effect immediately
      material.needsUpdate = true;
      console.log("Glass material reset to:", this.glass);
    },
  };

  // Configure renderer
  renderer.setSize(logoWidth, logoHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Add the renderer to the DOM
  const rendererElement = renderer.domElement;
  rendererElement.classList.add("extruded-logo");
  rendererElement.style.width = "100%"; // Fill container width
  container.appendChild(rendererElement);

  // Create lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x93d8ff, 0.9);
  directionalLight.position.set(1, 1, 2).normalize();
  scene.add(directionalLight);

  // Add a point light to create more dynamic lighting
  const pointLight = new THREE.PointLight(0xffffff, 0.8, 500);
  pointLight.position.set(50, 50, 100);
  scene.add(pointLight);

  // Add a back light to highlight edges
  const backLight = new THREE.DirectionalLight(0xaaaaff, 0.5);
  backLight.position.set(-1, -1, -1).normalize();
  scene.add(backLight);

  // Function to update camera based on settings
  function updateCamera() {
    camera.position.z = settings.camera.positionZ;
    camera.fov = settings.camera.fov;
    camera.updateProjectionMatrix();
  }

  // Function to update logo transform based on settings
  function updateLogoTransform() {
    if (!group) return;

    group.scale.set(settings.logo.scale, settings.logo.scale, settings.logo.scale);

    group.rotation.x = settings.logo.rotationX;
    group.rotation.z = settings.logo.rotationZ;

    group.position.x = settings.logo.positionX;
    group.position.y = settings.logo.positionY;
    group.position.z = settings.logo.positionZ;
  }

  // Update lighting
  function updateLighting() {
    ambientLight.color.set(settings.colors.ambient);
    ambientLight.intensity = settings.lighting.ambientIntensity;

    directionalLight.color.set(settings.colors.directional);
    directionalLight.intensity = settings.lighting.directionalIntensity;

    pointLight.color.set(settings.colors.point);
    pointLight.intensity = settings.lighting.pointIntensity;

    backLight.color.set(settings.colors.back);
    backLight.intensity = settings.lighting.backIntensity;

    material.color.set(settings.colors.material);
  }

  // Update glass material properties
  function updateGlassMaterial() {
    material.metalness = settings.glass.metalness;
    material.roughness = settings.glass.roughness;
    material.transmission = settings.glass.transmission;
    material.thickness = settings.glass.thickness;
    material.opacity = settings.glass.opacity;
    material.clearcoat = settings.glass.clearcoat;
    material.clearcoatRoughness = settings.glass.clearcoatRoughness;
    material.ior = settings.glass.ior;
    material.envMapIntensity = settings.glass.envMapIntensity;
  }

  // Manual method to create 3D logo using path data directly
  function createLogoFromPathData() {
    console.log("Creating logo from direct path data");

    // The exact path data from the SVG file
    const pathData =
      "M32.5 0L0 70.5H44V57.5H23L42.5 12.5L67.5 70.5H85L108.5 19.5L132 70.5H152.5L186 0H141.5V12.5H162L142.5 56.5L117.5 0H100L76.5 54.5L52.5 0H32.5Z";

    try {
      // Use a SVG path parser
      const loader = new SVGLoader();
      const paths = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${pathData}"/></svg>`);

      console.log("SVG Parser result:", paths);

      if (paths && paths.paths && paths.paths.length > 0) {
        console.log(`Found ${paths.paths.length} paths in SVG`);

        // Group to hold all meshes for centering calculations
        const allGeometries = [];

        // Update extrude settings from controls
        extrudeSettings.depth = settings.logo.extrudeDepth;

        // Update material with current glass settings
        updateGlassMaterial();

        // Process each path
        paths.paths.forEach((path, index) => {
          const shapes = path.toShapes(true);
          console.log(`Path ${index} generated ${shapes.length} shapes`);

          shapes.forEach((shape, shapeIndex) => {
            // Create geometry from shape
            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            allGeometries.push(geometry);

            // Create mesh
            const mesh = new THREE.Mesh(geometry, material);

            // Apply transformations to align with SVG viewBox
            // Note: we'll center the entire group later
            mesh.scale.set(0.9, -0.9, 0.9); // Increased scale and flip Y axis

            // Add the mesh to our group
            group.add(mesh);
          });
        });

        // Calculate the bounding box of the entire group
        const tempBox = new THREE.Box3();
        group.traverse((obj) => {
          if (obj.isMesh) {
            obj.geometry.computeBoundingBox();
            tempBox.expandByObject(obj);
          }
        });

        // Get the center of the bounding box
        const center = new THREE.Vector3();
        tempBox.getCenter(center);

        // Move each mesh to center the group
        group.children.forEach((mesh) => {
          if (mesh.isMesh) {
            mesh.position.x -= center.x;
            mesh.position.y -= center.y;
          }
        });

        // Apply settings to the group
        updateLogoTransform();

        // Ensure glass material settings applied
        updateGlassMaterial();

        // Setup GUI controls
        initGUIControls();

        // Start the animation
        animate();
      } else {
        console.error("Parsed SVG has no paths");
        return setupFallbackAnimation();
      }
    } catch (error) {
      console.error("Error creating shape from path data:", error);
      return setupFallbackAnimation();
    }
  }

  // Function to handle SVG loading errors by trying different paths
  function tryLoadingSVG(paths, currentIndex = 0) {
    if (currentIndex >= paths.length) {
      console.error("Failed to load SVG from all paths, falling back to direct path data");
      return createLogoFromPathData();
    }

    const currentPath = paths[currentIndex];
    console.log(`Trying to load SVG from: ${currentPath}`);

    // Load as text first to inspect the content
    fetch(currentPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text();
      })
      .then((svgText) => {
        console.log("SVG content retrieved:", svgText.substring(0, 200) + "...");

        // Now use SVGLoader to parse the SVG text
        const loader = new SVGLoader();
        const svgData = loader.parse(svgText);

        console.log("SVG parsed result:", svgData);

        if (svgData.paths && svgData.paths.length > 0) {
          console.log(`Loaded ${svgData.paths.length} paths successfully`);
          processSVGData(svgData);
        } else {
          console.error("SVG was loaded but no paths were found, trying direct path data approach");
          createLogoFromPathData();
        }
      })
      .catch((error) => {
        console.warn(`Error loading/parsing SVG from ${currentPath}:`, error);
        // Try the next path
        tryLoadingSVG(paths, currentIndex + 1);
      });
  }

  // Process the SVG data once loaded
  function processSVGData(svgData) {
    if (!svgData.paths || svgData.paths.length === 0) {
      console.error("No paths found in SVG data, trying direct path data approach");
      return createLogoFromPathData();
    }

    console.log(`Processing SVG with ${svgData.paths.length} paths`);

    // Scale factor for the SVG paths - increased
    const svgScale = 0.9;

    // Collect all geometries for bounding box calculation
    const allGeometries = [];

    // Update extrude settings from controls
    extrudeSettings.depth = settings.logo.extrudeDepth;

    // Ensure material has the correct glass properties before creating meshes
    updateGlassMaterial();

    // Process the SVG paths
    svgData.paths.forEach((path, index) => {
      console.log(`Processing path ${index + 1}/${svgData.paths.length}`);

      // Get shapes from paths
      const shapes = path.toShapes(true);

      if (!shapes || shapes.length === 0) {
        console.warn(`No shapes in path ${index + 1}`);
        return;
      }

      console.log(`Path ${index + 1} has ${shapes.length} shapes`);

      shapes.forEach((shape, shapeIndex) => {
        // Create geometry from shape
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        allGeometries.push(geometry);

        // Create mesh
        const mesh = new THREE.Mesh(geometry, material);

        // Apply transformations - only scale and flip Y axis
        mesh.scale.set(svgScale, -svgScale, svgScale);

        // Add the mesh to our group
        group.add(mesh);
        console.log(`Added shape ${shapeIndex + 1} for path ${index + 1}`);
      });
    });

    if (group.children.length === 0) {
      console.error("No meshes were created from the SVG, trying direct path data approach");
      return createLogoFromPathData();
    }

    console.log(`Created ${group.children.length} total meshes for the logo`);

    // Calculate the bounding box of the entire group
    const tempBox = new THREE.Box3();
    group.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry.computeBoundingBox();
        tempBox.expandByObject(obj);
      }
    });

    // Get the center of the bounding box
    const center = new THREE.Vector3();
    tempBox.getCenter(center);

    // Move each mesh to center the group
    group.children.forEach((mesh) => {
      if (mesh.isMesh) {
        mesh.position.x -= center.x;
        mesh.position.y -= center.y;
      }
    });

    // Apply initial transform settings
    updateLogoTransform();

    // Apply initial glass material properties and ensure they're set correctly
    console.log("Applying initial glass material settings:", settings.glass);
    updateGlassMaterial();

    // Force set the envMapIntensity directly to ensure it's applied
    material.envMapIntensity = settings.glass.envMapIntensity;
    material.needsUpdate = true;

    // Setup GUI controls
    initGUIControls();

    // Start the animation once loaded
    animate();
  }

  // Setup GUI controls
  function initGUIControls() {
    try {
      // Create GUI
      gui = new dat.GUI({ autoPlace: true });

      // Style the GUI
      const guiStyle = document.createElement("style");
      guiStyle.textContent = `
        .dg.main {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10000;
          max-height: 100vh;
          overflow-y: auto;
        }
        .dg.main .close-button {
          position: sticky;
          top: 0;
        }
      `;
      document.head.appendChild(guiStyle);

      // Camera folder
      const cameraFolder = gui.addFolder("Camera");
      cameraFolder.add(settings.camera, "positionZ", 50, 500).onChange(updateCamera);
      cameraFolder.add(settings.camera, "fov", 20, 80).onChange(updateCamera);
      cameraFolder.add(settings, "resetCamera");
      cameraFolder.open();

      // Logo folder
      const logoFolder = gui.addFolder("Logo");
      logoFolder.add(settings.logo, "scale", 0.5, 2).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "rotationX", -1, 1).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "rotationZ", -1, 1).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "positionX", -50, 50).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "positionY", -50, 50).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "positionZ", -50, 50).onChange(updateLogoTransform);
      logoFolder.add(settings.logo, "extrudeDepth", 1, 30).onChange((value) => {
        // Rebuilding models with new extrude depth requires recreation
        console.log("To apply extrude depth change, please refresh the page");
      });
      logoFolder.add(settings.logo, "rotationSpeed", 0, 0.02);
      logoFolder.add(settings.logo, "bobbing");
      logoFolder.add(settings.logo, "bobbingSpeed", 0.1, 5);
      logoFolder.add(settings.logo, "bobbingAmount", 0, 10);

      // X Oscillation controls
      const oscillationXFolder = logoFolder.addFolder("X Rotation Oscillation");
      oscillationXFolder.add(settings.logo, "oscillateX");
      oscillationXFolder.add(settings.logo, "oscillateXSpeed", 0.1, 2);
      oscillationXFolder.add(settings.logo, "oscillateXMin", -1, 0);
      oscillationXFolder.add(settings.logo, "oscillateXMax", 0, 1);
      oscillationXFolder.open();

      // Y Oscillation controls
      const oscillationYFolder = logoFolder.addFolder("Y Rotation Oscillation");
      oscillationYFolder.add(settings.logo, "oscillateY");
      oscillationYFolder.add(settings.logo, "oscillateYSpeed", 0.1, 2);
      oscillationYFolder.add(settings.logo, "oscillateYMin", -1, 0);
      oscillationYFolder.add(settings.logo, "oscillateYMax", 0, 1);
      oscillationYFolder.open();

      logoFolder.add(settings, "resetLogo");
      logoFolder.open();

      // Glass material folder
      const glassFolder = gui.addFolder("Glass Material");
      glassFolder.add(settings.glass, "metalness", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "roughness", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "transmission", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "thickness", 0, 5).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "opacity", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "clearcoat", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "clearcoatRoughness", 0, 1).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "ior", 1, 2.333).step(0.01).onChange(updateGlassMaterial);
      glassFolder.add(settings.glass, "envMapIntensity", 0, 3).onChange(updateGlassMaterial);
      glassFolder.add(settings, "resetGlass");
      glassFolder.open();

      // Colors & lighting folder
      const colorFolder = gui.addFolder("Colors & Lighting");
      colorFolder.addColor(settings.colors, "material").onChange(updateLighting);
      colorFolder.addColor(settings.colors, "ambient").onChange(updateLighting);
      colorFolder.addColor(settings.colors, "directional").onChange(updateLighting);
      colorFolder.addColor(settings.colors, "point").onChange(updateLighting);
      colorFolder.addColor(settings.colors, "back").onChange(updateLighting);

      colorFolder.add(settings.lighting, "ambientIntensity", 0, 1).onChange(updateLighting);
      colorFolder.add(settings.lighting, "directionalIntensity", 0, 1).onChange(updateLighting);
      colorFolder.add(settings.lighting, "pointIntensity", 0, 1).onChange(updateLighting);
      colorFolder.add(settings.lighting, "backIntensity", 0, 1).onChange(updateLighting);

      // Add ability to export settings as JSON
      settings.exportSettings = function () {
        const exportData = JSON.stringify(settings, null, 2);
        console.log("Current settings:", exportData);

        // Create and download a settings file
        const blob = new Blob([exportData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "logo3d-settings.json";
        a.click();
        URL.revokeObjectURL(url);
      };

      gui.add(settings, "exportSettings").name("Export Settings");
    } catch (error) {
      console.error("Failed to initialize GUI controls:", error);
    }
  }

  // Try different possible paths to the SVG file
  const possiblePaths = [
    "/src/assets/logo/NewLogo.svg", // Absolute from root
    "src/assets/logo/NewLogo.svg", // Relative
    "../assets/logo/NewLogo.svg", // Relative to js folder
    "/assets/logo/NewLogo.svg", // Production build path
    "assets/logo/NewLogo.svg", // Alternative production path
  ];

  // Ensure material has the correct environment map intensity before loading
  material.envMapIntensity = settings.glass.envMapIntensity;

  tryLoadingSVG(possiblePaths);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    if (group && group.children.length > 0) {
      // Y rotation is handled separately to allow continuous animation
      if (settings.logo.oscillateY) {
        const timeY = Date.now() * 0.001 * settings.logo.oscillateYSpeed;
        const oscillationFactorY = (Math.sin(timeY) + 1) / 2; // Value between 0 and 1
        const rotationRangeY = settings.logo.oscillateYMax - settings.logo.oscillateYMin;
        group.rotation.y = settings.logo.oscillateYMin + oscillationFactorY * rotationRangeY;
      } else {
        group.rotation.y += settings.logo.rotationSpeed;
      }

      // Handle X rotation oscillation
      if (settings.logo.oscillateX) {
        const time = Date.now() * 0.001 * settings.logo.oscillateXSpeed;
        const oscillationFactor = (Math.sin(time) + 1) / 2; // Value between 0 and 1
        const rotationRange = settings.logo.oscillateXMax - settings.logo.oscillateXMin;
        group.rotation.x = settings.logo.oscillateXMin + oscillationFactor * rotationRange;
      } else {
        group.rotation.x = settings.logo.rotationX;
      }

      // Add a gentle bobbing motion if enabled
      if (settings.logo.bobbing) {
        const time = Date.now() * 0.001 * settings.logo.bobbingSpeed;
        group.position.y = Math.sin(time) * settings.logo.bobbingAmount + settings.logo.positionY;
      }

      // Move the point light in a circular pattern
      const time = Date.now() * 0.001;
      pointLight.position.x = Math.sin(time) * 80;
      pointLight.position.z = Math.cos(time) * 80;

      // Update the environment map for glass refraction
      // Only update every few frames for performance
      if (Math.random() > 0.9) {
        // Hide the object temporarily so it doesn't appear in its own reflection
        group.visible = false;
        cubeCamera.update(renderer, scene);
        group.visible = true;
      }

      // Check if this is the first frame and the material needs initialization
      if (animate.firstFrame) {
        // Ensure environment map intensity is properly applied on first render
        material.envMapIntensity = settings.glass.envMapIntensity;
        material.needsUpdate = true;
        animate.firstFrame = false;
        console.log("First animation frame - applied envMapIntensity:", settings.glass.envMapIntensity);
      }
    }

    renderer.render(scene, camera);
  }

  // Flag for first frame initialization
  animate.firstFrame = true;

  // Handle window resizing
  const handleResize = () => {
    // Get the container size
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight || containerWidth * (logoHeight / logoWidth);

    // Set camera aspect ratio based on container
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();

    // Update renderer size to fill container
    renderer.setSize(containerWidth, containerHeight);
  };

  // Initial resize to fit container
  handleResize();

  // Add CSS to make logo wrapper take appropriate space
  const style = document.createElement("style");
  style.textContent = `
    #loading-splash .logo-wrapper {
      width: 100%;
      height: auto;
      min-height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    #loading-splash .extruded-logo {
      max-width: 100%;
      max-height: 100%;
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("resize", handleResize);

  return {
    dispose: () => {
      console.log("Disposing 3D logo");

      // Clean up function to remove Three.js elements
      if (container && rendererElement && container.contains(rendererElement)) {
        container.removeChild(rendererElement);
      }

      // Remove fallback animation if it was applied
      if (removeFallbackFn) {
        removeFallbackFn();
      }

      // Remove added styles
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }

      // Remove GUI if it exists
      if (gui) {
        gui.destroy();
      }

      // Dispose of geometries and materials
      if (group) {
        group.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }

      // Clean up event listeners
      window.removeEventListener("resize", handleResize);

      // Dispose of renderer
      if (renderer) {
        renderer.dispose();
      }
    },
  };
}
