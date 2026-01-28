import * as THREE from "three";
import { gsap } from "gsap";

/**
 * ShaderController - Manages shader uniforms and transitions
 * Provides API for updating shader parameters smoothly
 */
export class ShaderController {
  constructor(material) {
    this.material = material;
    
    if (!this.material) {
      console.error("ShaderController: No material provided");
      return;
    }
  }

  /**
   * Update a single uniform value
   * @param {string} uniformName - Name of the uniform
   * @param {*} value - New value for the uniform
   */
  updateUniform(uniformName, value) {
    if (!this.material || !this.material.uniforms[uniformName]) {
      console.warn(`Uniform ${uniformName} not found`);
      return;
    }

    // Handle different uniform types
    if (value instanceof THREE.Color) {
      this.material.uniforms[uniformName].value.copy(value);
    } else if (typeof value === "object" && value.r !== undefined) {
      // Color object {r, g, b}
      this.material.uniforms[uniformName].value.setRGB(value.r, value.g, value.b);
    } else {
      this.material.uniforms[uniformName].value = value;
    }
  }

  /**
   * Update multiple uniforms at once
   * @param {Object} uniforms - Object with uniform names as keys and values
   */
  updateUniforms(uniforms) {
    Object.keys(uniforms).forEach((key) => {
      this.updateUniform(key, uniforms[key]);
    });
  }

  /**
   * Smoothly transition uniforms to new values using GSAP
   * @param {Object} targetUniforms - Target values for uniforms
   * @param {number} duration - Transition duration in seconds
   */
  transitionTo(targetUniforms, duration = 7.0) {
    if (!this.material) return;

    // Use a smoother easing curve for longer transitions
    // power1.inOut provides smoother, more gradual transitions for longer durations
    const ease = duration >= 1.0 ? "power1.inOut" : "power2.inOut";

    Object.keys(targetUniforms).forEach((uniformName) => {
      const uniform = this.material.uniforms[uniformName];
      if (!uniform) {
        console.warn(`Uniform ${uniformName} not found for transition`);
        return;
      }

      const targetValue = targetUniforms[uniformName];

      // Handle color transitions
      if (uniform.value instanceof THREE.Color) {
        const targetColor = new THREE.Color(targetValue);
        gsap.to(uniform.value, {
          r: targetColor.r,
          g: targetColor.g,
          b: targetColor.b,
          duration,
          ease,
        });
      }
      // Handle numeric values
      else if (typeof uniform.value === "number") {
        gsap.to(uniform, {
          value: targetValue,
          duration,
          ease,
        });
      }
      // Handle Vector2 values (like u_directionEffective)
      else if (uniform.value && typeof uniform.value.x === "number" && typeof uniform.value.y === "number") {
        gsap.to(uniform.value, {
          x: targetValue.x !== undefined ? targetValue.x : uniform.value.x,
          y: targetValue.y !== undefined ? targetValue.y : uniform.value.y,
          duration,
          ease,
        });
      }
    });
  }

  /**
   * Get current uniform value
   * @param {string} uniformName - Name of the uniform
   * @returns {*} Current value of the uniform
   */
  getUniform(uniformName) {
    if (!this.material || !this.material.uniforms[uniformName]) {
      return null;
    }
    return this.material.uniforms[uniformName].value;
  }

  /**
   * Get all current uniform values
   * @returns {Object} Object with all uniform values
   */
  getAllUniforms() {
    if (!this.material) return {};

    const uniforms = {};
    Object.keys(this.material.uniforms).forEach((key) => {
      uniforms[key] = this.material.uniforms[key].value;
    });
    return uniforms;
  }
}

