import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import  ThemeType  from "../types/ThemeType";

const meta: Meta<typeof SwitchComponent> = {
  
  title: 'Components/Switch',
  component: SwitchComponent,
  tags:["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
  type Story = StoryObj<typeof SwitchComponent>;

export const Playground:  Story = {
  render:() => ({
    props:{
      isChecked: true,
      theme: ThemeType.primary,
    },
  }),
};
