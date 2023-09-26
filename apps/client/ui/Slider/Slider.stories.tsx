import type { Meta, StoryObj } from '@storybook/react'
import { CustomSlider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: CustomSlider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    range: {
      control: 'boolean'
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    range: false,
    min: 0,
    max: 500,
    step: 50
  },
}

export const Range: Story = {
  args: {
    range: true,
    min: 0,
    max: 10,
    step: 1
  }
}


