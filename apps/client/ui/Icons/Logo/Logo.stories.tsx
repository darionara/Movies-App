import type { Meta, StoryObj } from '@storybook/react'

import { LogoIcon } from '@/ui/Icons/Logo/Logo'

const meta = {
  title: 'Icons/Logo',
  component: LogoIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LogoIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Logo: Story = {
  args: {},
}