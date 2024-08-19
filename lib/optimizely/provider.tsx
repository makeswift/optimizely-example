'use client'

import { useMemo } from 'react'

import { OptimizelyProvider as Provider, createInstance } from '@optimizely/react-sdk'

export default function OptimizelyProvider({
  sessionId,
  datafile,
  children,
}: {
  sessionId: string
  datafile: object
  children: React.ReactNode
}) {
  const user = useMemo(() => ({ id: sessionId }), [sessionId])
  const optimizelyClient = createInstance({ datafile })

  return (
    <Provider optimizely={optimizelyClient} isServerSide user={user}>
      {children}
    </Provider>
  )
}
