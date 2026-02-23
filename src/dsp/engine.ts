import { el } from '@elemaudio/core'
import WebRenderer from '@elemaudio/web-renderer'
import { buildTapeNoise } from './tapenoise'
import { buildDistortion } from './distortion'
import { buildDelayStereo } from './delay'
import { buildReverbStereo } from './reverb'

let audioContext: AudioContext | null = null
let renderer: WebRenderer | null = null
let workletNode: AudioWorkletNode | null = null

/** Current delay wet amount (0–1), used when re-rendering. */
let currentDelayWet = 0
/** Current distortion amount (0–1), used when re-rendering. */
let currentDistortionAmount = 0
/** Current reverb wet (0–1), used when re-rendering. */
let currentReverbWet = 0

const silence = el.const({ value: 0 })

const DELAY_WET_KEY = 'delayWet'
const DISTORTION_AMOUNT_KEY = 'distortionAmount'
const REVERB_WET_KEY = 'reverbWet'

function buildTapeNoiseWithDelay(
  wet: number,
  distortionAmount: number,
  reverbWet: number
): [ReturnType<typeof el.add>, ReturnType<typeof el.add>] {
  const [tapeL, tapeR] = buildTapeNoise()
  const distNode = el.const({ key: DISTORTION_AMOUNT_KEY, value: distortionAmount })
  const [distL, distR] = buildDistortion(tapeL, tapeR, distNode)
  const wetNode = el.const({ key: DELAY_WET_KEY, value: wet })
  const [delayL, delayR] = buildDelayStereo(distL, distR, wetNode)
  const reverbNode = el.const({ key: REVERB_WET_KEY, value: reverbWet })
  return buildReverbStereo(delayL, delayR, reverbNode)
}

export async function renderTapeNoise(): Promise<void> {
  if (!renderer) return
  currentDelayWet = 0
  currentDistortionAmount = 0
  currentReverbWet = 0
  const [left, right] = buildTapeNoiseWithDelay(0, 0, 0)
  await renderer.render(left, right)
}

/**
 * Update delay wet amount (0–1) and re-render. Nearer logo center = higher wet.
 * No-op if DSP is not running.
 */
export async function setDelayWet(wet: number): Promise<void> {
  if (!renderer) return
  const clamped = Math.max(0, Math.min(1, wet))
  if (clamped === currentDelayWet) return
  currentDelayWet = clamped
  const [left, right] = buildTapeNoiseWithDelay(
    clamped,
    currentDistortionAmount,
    currentReverbWet
  )
  await renderer.render(left, right)
}

/**
 * Update distortion amount (0–1) from logo rotation and re-render.
 * No-op if DSP is not running.
 */
export async function setDistortionAmount(amount: number): Promise<void> {
  if (!renderer) return
  const clamped = Math.max(0, Math.min(1, amount))
  if (clamped === currentDistortionAmount) return
  currentDistortionAmount = clamped
  const [left, right] = buildTapeNoiseWithDelay(
    currentDelayWet,
    clamped,
    currentReverbWet
  )
  await renderer.render(left, right)
}

/**
 * Update reverb wet (0–1) from logo scale and re-render.
 * No-op if DSP is not running.
 */
export async function setReverbWet(wet: number): Promise<void> {
  if (!renderer) return
  const clamped = Math.max(0, Math.min(1, wet))
  if (clamped === currentReverbWet) return
  currentReverbWet = clamped
  const [left, right] = buildTapeNoiseWithDelay(
    currentDelayWet,
    currentDistortionAmount,
    clamped
  )
  await renderer.render(left, right)
}

async function renderSilence(): Promise<void> {
  if (!renderer) return
  await renderer.render(silence, silence)
}

export async function initElementary(): Promise<void> {
  if (renderer && audioContext?.state !== 'closed') {
    return
  }

  audioContext = new AudioContext()
  renderer = new WebRenderer()

  workletNode = await renderer.initialize(audioContext, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  })

  workletNode.connect(audioContext.destination)

  await renderSilence()
}

export function stopElementary(): void {
  if (workletNode) {
    workletNode.disconnect()
    workletNode = null
  }
  if (audioContext && audioContext.state !== 'closed') {
    audioContext.close()
  }
  audioContext = null
  renderer = null
}

export function isDspRunning(): boolean {
  return renderer !== null && audioContext?.state !== 'closed'
}

export function getRenderer(): WebRenderer | null {
  return renderer
}

export function getAudioContext(): AudioContext | null {
  return audioContext
}
