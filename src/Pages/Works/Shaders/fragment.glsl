precision highp float;

uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform sampler2D tMap;
uniform float uVisibility;
uniform float uDirection;
uniform float uRGBShift;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 ratio = vec2(
		min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );

  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  // Scroll-driven scale: zoom into center of texture when uScale > 1
  uv = (uv - 0.5) * (1.0 / uScale) + 0.5;

  // RGB split: red/blue shift horizontally, magnitude from scroll speed
  vec2 offset = vec2(0.0, uRGBShift * 0.062);
  gl_FragColor.r = texture2D(tMap, uv + offset).r;
  gl_FragColor.g = texture2D(tMap, uv).g;
  gl_FragColor.b = texture2D(tMap, uv - offset).b;
  gl_FragColor.a = step(abs(uDirection + uv.y), uVisibility);
}