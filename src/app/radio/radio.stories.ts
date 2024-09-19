import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RadioComponent } from './radio.component';
import { action } from '@storybook/addon-actions';
// import  ThemeType  from "../types/ThemeType";

const meta: Meta<RadioComponent> = {
  
    title: 'Form Elements/Radio',
    component: RadioComponent,
    tags:["autodocs"],
    argTypes: {
      theme: {
        control:{
          type:'select'
        },
        options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
      }
    },
  } as Meta<RadioComponent>;
  
  export default meta;
  type Story = StoryObj<RadioComponent>;

  export const Playground:  Story = {
    render:(args) => ({
      props:{
        ...args,
        label:'Lorem ipsum',
        onChange: action('onChange'),
      },
    }),
    args:{
      theme: 'primary',
      checked: true
    }
  };


