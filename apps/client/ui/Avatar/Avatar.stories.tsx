import type { Meta, StoryObj } from '@storybook/react';

import AvatarComp from '@/ui/Avatar/Avatar';
import AvatarImg from '@/public/avatar.svg';

const meta = {
  title: 'Components/Avatar',
  component: AvatarComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    email: {
      control: {
        type: 'text',
      },
    },
    avatarSrc: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof AvatarComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    name: 'Joachim Kowalski',
    email: 'j.kowalski@gmail.com',
    avatarSrc: AvatarImg,
  },
};
