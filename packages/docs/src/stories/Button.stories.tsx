import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@cr-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {}
