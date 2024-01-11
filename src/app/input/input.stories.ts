import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import ThemeType from '../types/ThemeType';

const meta: Meta<typeof InputComponent> = {
  
    title: 'Form Elements/Input',
    component: InputComponent,
    tags:["autodocs"],
    argTypes: {
    },
  } as Meta;

  export default meta;
  type Story = StoryObj<typeof InputComponent>;

  export const Playground:  Story = {
    render:() => ({
      props:{
        placeholder: 'Dolor sit',
        label: 'First Name',
        isInfo: true,
        value: '',
        infoMessage: 'Quisque tincidunt vitae purus id feugiat',
      },
    }),
  };
  
/*export const FirstName: Story<InputComponent> = Template.bind({});
FirstName.args={
    containerClassName: 'name',
    placeholder: 'Enter First Name',
    label:'First Name'
    
};
export const LastName: Story<InputComponent> = Template.bind({});
LastName.args={
    containerClassName: 'name',
    placeholder: 'Enter Last Name',
    label:'Last Name'
};
export const Email: Story<InputComponent> = Template.bind({});
Email.args={
    containerClassName: 'name',
    placeholder: 'name@example.com',
    label:'Enter Email',
    type: 'email',
    size: 25
};
export const Mobile: Story<InputComponent> = Template.bind({});
Mobile.args={
    containerClassName: 'name',
    placeholder: 'Enter Mobile Number',
    label:'Mobile',
    type: 'tel'
};
export const Password: Story<InputComponent> = Template.bind({});
Password.args={
    containerClassName: 'name required',
    placeholder: 'Enter Password',
    label:'Enter Password',
    type: 'password',
};
export const Message: Story<InputComponent> = Template.bind({});
Message.args={
    containerClassName: 'name',
    placeholder: 'Enter Password',
    label:'Enter Password',
    type: 'textArea',
};*/