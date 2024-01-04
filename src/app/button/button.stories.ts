import {Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default{
    title: 'Form Elements/Button',
    component: ButtonComponent
} as Meta;

interface ButtonProps extends ButtonComponent{
    label: string;
}

const Template: Story<ButtonComponent> =({label, className}: Partial<ButtonProps>) =>({
    component: ButtonComponent,
    moduleMetadata: {
        declarations: [ButtonComponent],
        import:[]
    },
    template:`<app-button className='${className}'>${label}</app-button>`
});
export const Primary: Story<ButtonProps> = Template.bind({});
    Primary.args = {
        className: 'btn-primary',
        label: 'Primary'
    };
export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
    className: 'btn-secondary',
    label: 'Secondary'
};
export const Empty: Story<ButtonProps> = Template.bind({});
Empty.args = {
    icon:'times',
    className: 'btn-empty',
    label: 'Cancel'
};