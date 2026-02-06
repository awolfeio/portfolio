# shader-post-processing.md

## Liquid–Chromatic Metallic / Oil-Slick Post-Processing Stack (Steps 1–4)

This document defines a **post-processing optical layer stack** to be applied _after_ base liquid density, flow, and absorption have been computed in the fragment shader.

Scope covers **Steps 1–4 only**, focused on **metallic iridescence, paint sheen, and oil-slick behavior**.  
No domain warping or motion logic is included here.

---

## Assumptions & Inputs

These steps assume the fragment shader already provides:

- `vec3 color`  
  Final base color after liquid motion + Beer–Lambert absorption

- `float composite`  
  Normalized density / depth field (0–1)

- `vec2 uv`  
  Normalized screen-space UVs

- `#extension GL_OES_standard_derivatives : enable`

---

## Step 1 — Thin-Film Interference (Iridescence Core)

### Purpose

Simulate wavelength interference seen in oil slicks and thin liquid films.

This is the **primary source of rainbow iridescence**.

### Method

- Derive a fake surface normal from the density gradient
- Compute a Fresnel-like term
- Apply phase-shifted sine waves per channel
- Add _additively_ to base color

### Implementation

```glsl
vec3 computeNormal(float field) {
  return normalize(vec3(
    dFdx(field) * 2.0,
    dFdy(field) * 2.0,
    1.0
  ));
}

vec3 thinFilmIridescence(vec3 normal, float strength) {
  float fresnel = pow(1.0 - normal.z, 3.0);
  return vec3(
    sin(fresnel * 6.283 + 0.0),
    sin(fresnel * 6.283 + 2.1),
    sin(fresnel * 6.283 + 4.2)
  ) * strength;
}
Application
vec3 normal = computeNormal(composite);
color += thinFilmIridescence(normal, u_iridescenceStrength);
Uniform
uniform float u_iridescenceStrength; // recommended: 0.12–0.18
Step 2 — Fresnel Edge Tint (Metallic Shift)
Purpose
Introduce angle-dependent color shifting characteristic of metallic paint and coated liquids.

This creates chromatic intensity at grazing angles without flattening midtones.

Method
Reuse fake normal

Compute a tighter Fresnel curve

Tint toward secondary or accent color

Implementation
vec3 fresnelTint(vec3 normal, vec3 tintColor, float strength) {
  float f = pow(1.0 - normal.z, 4.0);
  return tintColor * f * strength;
}
Application
color += fresnelTint(normal, u_secondaryColor, u_fresnelStrength);
Uniform
uniform float u_fresnelStrength; // recommended: 0.2–0.35
Step 3 — Clear-Coat Specular Layer
Purpose
Simulate a wet, glossy lacquer layer above pigment and iridescence.

This should read as paint clear-coat, not metallic reflection.

Method
Tight specular lobe

Neutral highlight color

Independent from base color saturation

Implementation
float clearCoatSpecular(
  float field,
  vec3 lightDir,
  float shininess
) {
  vec3 n = normalize(vec3(
    dFdx(field) * 2.0,
    dFdy(field) * 2.0,
    1.0
  ));
  return pow(max(dot(n, lightDir), 0.0), shininess);
}
Application
vec3 lightDir = normalize(vec3(0.4, 0.6, 1.0));
float spec = clearCoatSpecular(composite, lightDir, 32.0);

vec3 clearCoatColor = vec3(1.0, 0.96, 0.9);
color += clearCoatColor * spec * u_specularStrength;
Uniform
uniform float u_specularStrength; // recommended: 0.1–0.25
Step 4 — Metallic Flake Micro-Layer
Purpose
Add micro-scale sparkle typical of metallic paint without introducing grain or noise artifacts.

This layer should be:

Subtle

Directionally masked

High-frequency but sparse

Method
High-frequency noise

Hard thresholding

Masked by Fresnel term

Implementation
float metallicFlakes(vec2 uv, float fresnel) {
  float n = snoise(uv * 500.0);
  n = smoothstep(0.75, 0.92, n);
  return n * fresnel;
}
Application
float fresnel = pow(1.0 - normal.z, 3.0);
float flake = metallicFlakes(uv, fresnel);

color += flake * u_flakeStrength;
Uniform
uniform float u_flakeStrength; // recommended: 0.08–0.15
Required Execution Order
These layers must be applied in this exact order:

Thin-film iridescence

Fresnel edge tint

Clear-coat specular

Metallic flakes

All occur after base liquid color + absorption and before any final tone mapping or gamma correction.

Notes
All steps are pure ALU, no textures required

Safe for full-screen backgrounds

Mobile-safe if flake frequency ≤ 500

Each layer is independently tunable via uniforms
```
