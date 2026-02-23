import { el } from '@elemaudio/core'

/** Max drive multiplier when amount = 1 (1 + AMOUNT * DRIVE_RANGE). */
const DRIVE_RANGE = 10

/**
 * Soft-clip transfer: out = tanh(drive * x), drive = 1 + amount * DRIVE_RANGE.
 * Amount 0 = linear, amount 1 = heavy soft saturation.
 */
function transfer(x: number, amount: number): number {
  const drive = 1 + amount * DRIVE_RANGE
  return Math.tanh(drive * x)
}

/**
 * Apply distortion to a single channel. amountNode is a const (0–1).
 */
function distortChannel(
  x: ReturnType<typeof el.mul>,
  amountNode: ReturnType<typeof el.const>
): ReturnType<typeof el.tanh> {
  const drive = el.add(
    el.const({ value: 1 }),
    el.mul(amountNode, el.const({ value: DRIVE_RANGE }))
  )
  return el.tanh(el.mul(x, drive))
}

/**
 * Stereo distortion. amountNode must be a keyed const (0–1) for live updates.
 */
export function buildDistortion(
  leftIn: ReturnType<typeof el.mul>,
  rightIn: ReturnType<typeof el.mul>,
  amountNode: ReturnType<typeof el.const>
): [ReturnType<typeof el.tanh>, ReturnType<typeof el.tanh>] {
  return [distortChannel(leftIn, amountNode), distortChannel(rightIn, amountNode)]
}

/**
 * Sample points for the distortion transfer curve (for graphing).
 * Returns [x, y] pairs over x in [-1, 1] with the same transfer as the DSP.
 */
export function getDistortionCurvePoints(
  amount: number,
  numPoints = 101
): [number, number][] {
  const points: [number, number][] = []
  for (let i = 0; i < numPoints; i++) {
    const x = -1 + (2 * i) / (numPoints - 1)
    points.push([x, transfer(x, amount)])
  }
  return points
}
