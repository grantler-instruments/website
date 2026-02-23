import { el } from '@elemaudio/core'

/** Max delay line length in samples (≈2 s at 44.1 kHz). */
const DELAY_SIZE_SAMPLES = 88200

/** Delay time in ms. */
const DELAY_MS = 380

/** Feedback coefficient in [0, 1]. */
const DELAY_FEEDBACK = 0.45

const delayProps = { size: DELAY_SIZE_SAMPLES }

/**
 * Single-channel delay with dry/wet mix.
 * out = (1 - wet) * x + wet * delay(x)
 */
function delayChannel(x: ReturnType<typeof el.mul>, wet: ReturnType<typeof el.const>) {
  const dryGain = el.sub(el.const({ value: 1 }), wet)
  const delayed = el.delay(
    delayProps,
    el.ms2samps(el.const({ value: DELAY_MS })),
    el.const({ value: DELAY_FEEDBACK }),
    x
  )
  return el.add(el.mul(dryGain, x), el.mul(wet, delayed))
}

/**
 * Stereo delay: same delay time and feedback on L and R, wet controls mix.
 * wetNode must be a constant node (value 0–1) so it can be updated when re-rendering.
 */
export function buildDelayStereo(
  leftIn: ReturnType<typeof el.mul>,
  rightIn: ReturnType<typeof el.mul>,
  wetNode: ReturnType<typeof el.const>
): [ReturnType<typeof el.add>, ReturnType<typeof el.add>] {
  const leftOut = delayChannel(leftIn, wetNode)
  const rightOut = delayChannel(rightIn, wetNode)
  return [leftOut, rightOut]
}
