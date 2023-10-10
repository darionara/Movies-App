import type { Meta, StoryObj } from '@storybook/react'

import { SearchIcon } from './Search'

const meta = {
  title: 'Icons/Search',
  component: SearchIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {},
}
