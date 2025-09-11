'use client'

import { ReactRuntimeProvider, RootStyleRegistry, SiteVersion } from '@makeswift/runtime/next'

import '@/lib/makeswift/components'
import { runtime } from '@/lib/makeswift/runtime'

export function MakeswiftProvider({
  children,
  locale = undefined,
  siteVersion = null,
}: {
  children: React.ReactNode
  locale?: string
  siteVersion: SiteVersion | null
}) {
  return (
    <ReactRuntimeProvider {...{ runtime, siteVersion, locale }}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ReactRuntimeProvider>
  )
}
