import { el } from '@elemaudio/core'

/** Max delay size in samples (~1.5 s at 44.1 kHz). */
const REVERB_DELAY_SIZE = 66150

const delayProps = { size: REVERB_DELAY_SIZE }

/** Comb filter: delay with feedback. Each needs a unique key for its buffer. */
function comb(
  x: ReturnType<typeof el.mul>,
  timeMs: number,
  feedback: number,
  key: string
): ReturnType<typeof el.add> {
  const delayed = el.delay(
    { ...delayProps, key },
    el.ms2samps(el.const({ value: timeMs })),
    el.const({ value: feedback }),
    x
  )
  return el.add(x, delayed)
}

/**
 * Simple stereo reverb: parallel comb filters on L/R with different times,
 * then dry/wet mix. wetNode must be a keyed const (0–1).
 */
export function buildReverbStereo(
  leftIn: ReturnType<typeof el.mul>,
  rightIn: ReturnType<typeof el.mul>,
  wetNode: ReturnType<typeof el.const>
): [ReturnType<typeof el.add>, ReturnType<typeof el.add>] {
  const c = 0.72
  const leftCombs = el.add(
    comb(leftIn, 29.7, c, 'rvL0'),
    el.mul(0.5, comb(leftIn, 37.1, c, 'rvL1')),
    el.mul(0.25, comb(leftIn, 41.3, c, 'rvL2')),
    el.mul(0.125, comb(leftIn, 53.1, c, 'rvL3'))
  )
  const rightCombs = el.add(
    comb(rightIn, 31.2, c, 'rvR0'),
    el.mul(0.5, comb(rightIn, 43.7, c, 'rvR1')),
    el.mul(0.25, comb(rightIn, 47.9, c, 'rvR2')),
    el.mul(0.125, comb(rightIn, 59.3, c, 'rvR3'))
  )

  const dryL = el.sub(el.const({ value: 1 }), wetNode)
  const dryR = el.sub(el.const({ value: 1 }), wetNode)
  const wetL = el.mul(wetNode, el.mul(0.35, leftCombs))
  const wetR = el.mul(wetNode, el.mul(0.35, rightCombs))

  return [
    el.add(el.mul(dryL, leftIn), wetL),
    el.add(el.mul(dryR, rightIn), wetR),
  ]
}
