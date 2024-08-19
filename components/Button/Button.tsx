'use client'

import { Ref, forwardRef } from 'react'

import { useTrackEvent } from '@optimizely/react-sdk'
import clsx from 'clsx'

type Props = {
  className?: string
  event?: string
}

export const Button = forwardRef(function Button(
  { className, event = '' }: Props,
  ref: Ref<HTMLButtonElement>
) {
  const [track] = useTrackEvent()

  return (
    <button
      ref={ref}
      onClick={() => {
        track(event)
      }}
      className={clsx(
        className,
        'hover:bg-primary-400 cursor-pointer bg-blue-500 px-6 py-3 text-white transition-shadow duration-500 hover:shadow-[0_3px_50px_rgba(95,120,255,.5)]'
      )}
    >
      Track!
    </button>
  )
})
