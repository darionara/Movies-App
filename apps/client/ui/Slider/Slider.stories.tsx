import type { Meta, StoryObj } from '@storybook/react'
import { CustomSlider } from './Slider'

const meta = {
  title: 'Components/Sliders/Slider',
  component: CustomSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    min: 0,
    max: 500,
    step: 50
  },
}

