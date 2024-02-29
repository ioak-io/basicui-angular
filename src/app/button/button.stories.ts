import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import ThemeType from "../types/ThemeType";

export default {
  title: 'Form Elements/Button',
  component: ButtonComponent,
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
