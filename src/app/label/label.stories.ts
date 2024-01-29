import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<typeof LabelComponent> = {
  
    title: 'Form Elements/Label',
    component: LabelComponent,
    tags:["autodocs"],
    argTypes: {
    },
  } as Meta;
  
  export default meta;
  type Story = StoryObj<typeof LabelComponent>;

  export const Playground:  Story = {
    render:() => ({
      props:{
        label: 'Lorem ipsum Dolor sit'
      },
    }),
  };
