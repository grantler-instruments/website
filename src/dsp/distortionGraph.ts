import { getDistortionCurvePoints } from './distortion'

/**
 * Build an SVG path `d` for the distortion transfer curve.
 * Coordinates are in [0,1] x [0,1] (input -> output), so the path can be
 * drawn in a viewBox="0 0 1 1" or scaled to pixel size.
 */
export function distortionCurvePath(amount: number, numPoints = 101): string {
  const points = getDistortionCurvePoints(amount, numPoints)
  // Map x from [-1,1] to [0,1], y from [-1,1] to [0,1]
  const toUnit = (x: number) => (x + 1) / 2
  const d = points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${toUnit(x)} ${1 - toUnit(y)}`)
    .join(' ')
  return d
}

export { getDistortionCurvePoints } from './distortion'
