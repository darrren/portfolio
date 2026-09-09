precision highp float;
precision highp int;

uniform vec2 uPlaneSizes;
uniform float uTime;
uniform float uHover;
uniform vec2 uPointer;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 pos = position;

  // Aspect-correct local space so the ripple is a true circle, not an ellipse
  vec2 aspect = max(uPlaneSizes, vec2(0.001)) /
    max(max(uPlaneSizes.x, uPlaneSizes.y), 0.001);
  vec2 localPos = pos.xy * aspect;
  vec2 pointer = (uPointer - 0.5) * aspect;

  // Ripple radiating outward from the hover point
  float dist = distance(localPos, pointer);
  float wave =
    sin(dist * 22.0 - uTime * 5.0) *
    0.06 *
    exp(-dist * 3.0) *
    uHover;

  // Displace radially (mapped back to uv space) plus a slight z bulge
  vec2 dir = normalize(localPos - pointer + 1e-4) / aspect;
  pos.xy += dir * wave;
  pos.z += wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}