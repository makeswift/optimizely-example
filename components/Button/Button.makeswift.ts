import { MakeswiftComponentType } from '@makeswift/runtime/components'
import { Style, TextInput } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

import { Button } from './Button'

export const props = {
  className: Style({ properties: [Style.Margin] }),
  event: TextInput({ label: 'Event', defaultValue: '' }),
}

runtime.registerComponent(Button, {
  type: MakeswiftComponentType.Button,
  label: 'Button',
  props,
})
