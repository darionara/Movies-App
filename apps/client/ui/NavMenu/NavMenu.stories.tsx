import type { Meta, StoryObj } from '@storybook/react'

import { NavMenu } from '@/ui/NavMenu/NavMenu'

const meta = {
  title: 'Components/Navigation menu',
  component: NavMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Navigation: Story = {
  args: {},
}
