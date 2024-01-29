
//import { moduleMetadata } from '@storybook/angular';
/*import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
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
};*/


import {Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";
//import {ButtonComponentSpec} from './button.component.spec';


export default{
  title: 'Form Elements/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props:args,
});

export const Playground = Template.bind ({});
Playground.args = {
  label:'Lorem ipsum',
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
};
  