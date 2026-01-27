// Simple passthrough vertex shader
// Just passes position to fragment shader and handles UV coordinates

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

