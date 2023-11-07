import type { Meta, StoryObj } from '@storybook/react'
import { GenrePill } from './Pill'

const meta = {
  title: 'Components/Pill',
  component: GenrePill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenrePill>

export default meta
type Story = StoryObj<typeof meta>

export const Pill: Story = {
  args: {
    children: 'action',
  },
}
