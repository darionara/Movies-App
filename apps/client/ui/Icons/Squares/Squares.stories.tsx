import type { Meta, StoryObj } from '@storybook/react';

import SquaresIcon from './Squares';

const meta = {
  title: 'Icons/Squares',
  component: SquaresIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SquaresIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Squares: Story = {
  args: {},
};
