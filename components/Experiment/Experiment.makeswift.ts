'use client'

import { lazy } from 'react'

import { Combobox, Select, Slot, Style } from '@makeswift/runtime/controls'
import { createInstance } from '@optimizely/react-sdk'

import { runtime } from '@/lib/makeswift/runtime'

const client = createInstance({ sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY })

runtime.registerComponent(
  lazy(() => import('./Experiment')),
  {
    type: 'Experiment',
    label: 'Custom / Experiment',
    props: {
      className: Style(),
      flagKey: Combobox({
        label: 'Flag Key',
        getOptions: async () => {
          // This grabs the possible keys from the Optimizely SDK
          await client.onReady()
          const featureKeys = Object.keys(client.getOptimizelyConfig()?.featuresMap ?? {})

          return [
            ...featureKeys.map(key => ({
              label: key,
              value: key,
              id: key,
            })),
          ]
        },
      }),
      A: Slot(),
      B: Slot(),
      variation: Select({
        label: 'Variation',
        options: [
          { label: 'Optimizely A/B', value: 'optimizely' },
          { label: 'A', value: 'on' },
          { label: 'B', value: 'off' },
        ],
        defaultValue: 'optimizely',
      }),
    },
  }
)
