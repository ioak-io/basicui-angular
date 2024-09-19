
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import ThemeType from "../types/ThemeType";

const meta: Meta<IconButtonComponent> = {

  title: 'Form Elements/Icon Button',
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    theme:{
      control: {type: 'radio'},
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
    },
    variant:{
      control: {type: 'radio'},
      options: ["default", "outline", "fill", "transparent"]
    }
  },
} as Meta;

export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args
    },
  }),
};