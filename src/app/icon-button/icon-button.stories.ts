
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import ThemeType from "../types/ThemeType";

const meta: Meta<typeof IconButtonComponent> = {

  title: 'Form Elements/Icon Button',
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof IconButtonComponent>;

export const Playground: Story = {
  render: () => ({
    props: {
      theme: ThemeType.primary,
      variant: ButtonVariantType.default,
      circle: false,
    },
  }),
};