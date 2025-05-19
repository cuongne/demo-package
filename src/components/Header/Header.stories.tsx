import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const StickyHeader: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header in sticky state when scrolling down',
      },
    },
  },
  play: async () => {
    // Simulate scroll to trigger sticky header
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
  },
};

export const LoggedIn: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header when user is logged in',
      },
    },
  },
  decorators: [
    (Story) => {
      // Mock the checkLogin service
      return <Story />;
    },
  ],
};

export const LoggedOut: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header when user is logged out',
      },
    },
  },
  decorators: [
    (Story) => {
      // Mock the checkLogin service
      return <Story />;
    },
  ],
};