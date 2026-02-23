import { el } from '@elemaudio/core'

/** Gain for tape noise output (0–1). */
const TAPE_GAIN = 0.35

/**
 * Builds a continuous tape-noise style signal: latched noise, modulated
 * cycle, and allpass for a warbly, dusty character.
 * Returns [left, right] for stereo (same signal both channels).
 */
export function buildTapeNoise(): [ReturnType<typeof el.mul>, ReturnType<typeof el.mul>] {
  // Latched noise: sample noise at low rate for stepped/tape-like values
  const value = el.latch(el.train(0.01), el.noise())
  const noiseAmount = el.mul(
    100,
    el.latch(el.train(500 + Math.random() * 1000), el.abs(el.noise()))
  )
  const noiseSignal = el.mul(
    el.cycle(el.cycle(value)),
    el.latch(el.train(2 + Math.random() * 8), el.noise())
  )
  const fc = el.mul(
    1000,
    el.latch(el.train(1 + Math.random() * 2), el.abs(el.noise()))
  )
  const filtered = el.allpass(fc, noiseAmount, noiseSignal)
  const out = el.mul(TAPE_GAIN, filtered)
  return [out, out]
}
