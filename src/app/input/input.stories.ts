import { Meta, Story } from '@storybook/angular';
import { InputComponent } from './input.component';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';

export default{
    title: 'Form Elements/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
            declarations: [InputComponent]
        })
    ],
    argsTypes: {
        placeholder:{
            control:'text'
        },
        label:{
            control:'text'
        }
    }
} as Meta;

const Template: Story<InputComponent> =(args:InputComponent) =>({
    component: InputComponent,
    props:args
});
export const Flat: Story<InputComponent> = Template.bind({});
Flat.args={
    containerClassName: 'flat text-textMedium',
    placeholder: 'Search'
    
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