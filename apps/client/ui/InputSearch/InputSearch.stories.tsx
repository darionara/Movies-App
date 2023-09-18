import type { Meta, StoryObj } from '@storybook/react'

import { InputSearch } from './InputSearch'

const meta = {
  title: 'Components/InputSearch',
  component: InputSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSearch>

export default meta
type Story = StoryObj<typeof meta>

export const SearchInput: Story = {
  args: {},
}
