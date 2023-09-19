import type { Meta, StoryObj } from '@storybook/react'
import { CustomSlider } from './Slider'

const meta = {
  title: 'Components/SliderRange',
  component: CustomSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Range: Story = {
  args: {
    min: 0,
    max: 10,
    step: 1
  },
}


