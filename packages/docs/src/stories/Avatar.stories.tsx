import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@cr-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/CrisnaldoSantos.png',
    alt: 'Crisnaldo Carvalho',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
