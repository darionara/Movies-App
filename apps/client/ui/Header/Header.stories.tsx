import type { Meta, StoryObj } from '@storybook/react';

import HeaderComp from '@/ui/Header/Header';

const meta = {
  title: 'Components/Header',
  component: HeaderComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {},
};
