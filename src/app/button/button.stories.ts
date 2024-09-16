import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import ThemeType from "../types/ThemeType";
// const themeOptions = ['default', 'primary', 'secondary', 'success', 'warning', 'danger']; 
export default {
  title: 'Form Elements/Button',
  component: ButtonComponent,
  argTypes:{
    theme:{
      control: {type: 'select',},
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']   
    },
    variant:{
      control: {type: 'select',},
      options: ["default", "outline", "fill", "chroma", "transparent"]   
    }
  },
  args:{
    theme: 'default'
  }
} as Meta;
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const Playground = Template.bind({});
Playground.args = {
  label: 'Lorem ipsum',
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
};
