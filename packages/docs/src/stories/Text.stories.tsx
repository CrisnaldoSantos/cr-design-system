import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@cr-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed scelerisque arcu. Vestibulum porttitor bibendum pharetra. Donec nec ante quis nisi convallis volutpat. Etiam ultricies massa neque.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
