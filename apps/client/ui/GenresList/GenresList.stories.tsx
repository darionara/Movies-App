import type { Meta, StoryObj } from '@storybook/react';

import { GenresList } from './GenresList';

const meta = {
  title: 'Components/PillsList',
  component: GenresList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenresList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PillsList: Story = {
  args: {},
};
