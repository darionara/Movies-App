import type { Meta, StoryObj } from '@storybook/react'

import { ListBulletIcon } from './ListBullet'

const meta = {
  title: 'Icons/ListBullet',
  component: ListBulletIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ListBulletIcon>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {
  args: {},
}
