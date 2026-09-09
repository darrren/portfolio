precision highp float;
precision highp int;

uniform float uTime;
uniform float uScanSpeed;
uniform float uActive;
uniform float uTailLength;
uniform vec3 uColor;
uniform float uScanIntensity;

varying vec2 vUv;

void main() {
  float cycle = fract(uTime * uScanSpeed);

  // Leading edge sweeps bottom (0) -> top (1) during the active part of the
  // loop, then keeps advancing through the idle part so the whole tail has
  // time to fade out before the cycle restarts
  float front = cycle / uActive;

  // How far behind the leading edge this fragment sits
  float dist = front - vUv.y;

  // Ramp the leading edge in so it never pops on/off
  float leadingRamp = smoothstep(0.0, 0.03, dist);

  // Fade the tail out as it recedes behind the leading edge
  float tailFalloff = 1.0 - smoothstep(0.0, uTailLength, dist);

  float band = step(0.0, dist) * leadingRamp * tailFalloff;

  // Only the scan glows; everywhere else stays fully transparent.
  // Additive blending scales the added color by alpha, so the tail fades
  // smoothly into nothing.
  gl_FragColor = vec4(uColor * uScanIntensity * band, uScanIntensity * band);
}