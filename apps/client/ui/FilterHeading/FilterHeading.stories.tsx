import type { Meta, StoryObj } from '@storybook/react';

import FilterHeading from './FilterHeading';

const meta = {
  title: 'Components/Heading',
  component: FilterHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading3: Story = {
  args: {
    children: 'genres',
  },
};
