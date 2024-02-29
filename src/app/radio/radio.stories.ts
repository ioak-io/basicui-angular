import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RadioComponent } from './radio.component';
import { action } from '@storybook/addon-actions';
import  ThemeType  from "../types/ThemeType";

const meta: Meta<typeof RadioComponent> = {
  
    title: 'Form Elements/Radio',
    component: RadioComponent,
    tags:["autodocs"],
    argTypes: {
    },
  } as Meta;
  
  export default meta;
  type Story = StoryObj<typeof RadioComponent>;

  export const Playground:  Story = {
    render:() => ({
      props:{
        theme: ThemeType.primary,
        label:'Lorem ipsum',
        onChange: action('Radio changed'),
      },
    }),
  };


