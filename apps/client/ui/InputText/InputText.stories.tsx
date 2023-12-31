import type { Meta, StoryObj } from '@storybook/react';

import InputText from './InputText';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: 'Filter by keywords...',
  },
};
