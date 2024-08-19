'use client'

import React, { ReactNode, Ref, forwardRef } from 'react'

import { useDecision } from '@optimizely/react-sdk'

type Props = {
  className?: string
  flagKey?: string
  A?: ReactNode
  B?: ReactNode
  variation?: 'optimizely' | 'on' | 'off'
}

const Experiment = forwardRef(function Experiment(
  { className, flagKey = '', A, B, variation }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [decision] = useDecision(flagKey)

  const variationKey = (variation === 'optimizely' ? decision?.variationKey : variation) ?? 'off'

  if (flagKey === '') {
    return (
      <div className="max-w-5xl text-balance p-4 text-center text-gray-400">
        Please select a flag key from the combobox
      </div>
    )
  }

  return (
    <div className={className} ref={ref}>
      {{ on: A, off: B }[variationKey] ?? (
        <div className="max-w-5xl text-balance p-4 text-center text-gray-400">
          Expected the variation key to be "on" or "off" but got "{variationKey}" from Optimizely
          from the flag "{flagKey}". Make sure the variation keys match.
        </div>
      )}
    </div>
  )
})

export default Experiment
