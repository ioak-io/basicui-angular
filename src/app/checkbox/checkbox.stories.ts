import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import  ThemeType  from "../types/ThemeType";

const meta: Meta<typeof CheckboxComponent> = {
  
    title: 'Form Elements/Checkbox',
    component: CheckboxComponent,
    tags:["autodocs"],
    argTypes: {
    },
  } as Meta;
  
  export default meta;
  type Story = StoryObj<typeof CheckboxComponent>;

  export const Playground:  Story = {
    render:() => ({
      props:{
        theme: ThemeType.default,
        label:'Lorem ipsum Dolor sit',
        
      },
    }),
  };
