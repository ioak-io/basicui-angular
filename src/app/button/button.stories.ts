
//import { moduleMetadata } from '@storybook/angular';
import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";


const meta: Meta<typeof ButtonComponent> = {
  
  title: 'Form Elements/Button',
  component: ButtonComponent,
  tags:["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Playground:  Story = {
  render:() => ({
    props:{
      label:'Lorem ipsum',
      theme: ThemeType.primary,
      variant: ButtonVariantType.default,
    },
  }),
};


