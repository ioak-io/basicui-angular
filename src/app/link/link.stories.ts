import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LinkComponent } from './link.component';
import ThemeType from "../types/ThemeType";

const meta: Meta<typeof LinkComponent> = {

  title: 'Form Elements/Link',
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Playground: Story = {
  render: () => ({
    props: {
      theme: ThemeType.primary,
      label: 'Lorem ipsum',
    },
  }),
};
