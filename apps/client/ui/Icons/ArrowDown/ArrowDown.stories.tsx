import type { Meta, StoryObj } from '@storybook/react'

import { ArrowDownIcon } from './ArrowDown'

const meta = {
  title: 'Icons/ArrowDown',
  component: ArrowDownIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArrowDownIcon>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {
  args: {},
}
