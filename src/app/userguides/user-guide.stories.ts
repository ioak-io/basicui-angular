// user-guide.stories.ts
import { Meta, StoryObj } from '@storybook/angular'; // Make sure to import from angular
import { UserGuideComponent } from './user-guide.component'; // Ensure this path is correct

const meta: Meta<UserGuideComponent> = {
  title: 'User Guide',
  component: UserGuideComponent,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['introduction', 'color-scheme-generator'],

    },
  },
};

export default meta;

type Story = StoryObj<UserGuideComponent>;

export const Introduction: Story = {
  args: {
    variant: 'introduction',
  },
};

export const ColorSchemeGenerator: Story = {
  args: {
    variant: 'color-scheme-generator',
  },
};
