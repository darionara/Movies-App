import type { Meta, StoryObj } from '@storybook/react'
import { CustomRange } from './Range'

const meta = {
  title: 'Components/Sliders/Range',
  component: CustomRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomRange>

export default meta
type Story = StoryObj<typeof meta>

export const Range: Story = {
  args: {
    min: 0,
    max: 10,
    step: 1
  },
}


