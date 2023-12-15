//import { FormsModule } from '@angular/forms';
/*import { Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default{
    title: 'components/Checkbox',
    component: CheckboxComponent,
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    component: CheckboxComponent,
    props: args
});

export const Checkbox : Story<CheckboxComponent> = Template.bind({});
Checkbox.args = {
    //checked: true,
};
export const Checked : Story<CheckboxComponent> = Template.bind({});
Checked.args = {
   
};*/

import { Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';

export default{
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
            declarations: [CheckboxComponent]
        })
    ],
    argsTypes: {
        label:{
            control:'text'
        },
        color:{
            color:'red'
        }
    }
} as Meta;

const Template: Story<CheckboxComponent> =(args:CheckboxComponent) =>({
    component: CheckboxComponent,
    props:args
});
export const BasicCheckbox: Story<CheckboxComponent> = Template.bind({});
BasicCheckbox.args={
    containerClassName: '',
    label: 'Article description',
    danger: false
    
};
export const CheckboxWithTooltip: Story<CheckboxComponent> = Template.bind({});
CheckboxWithTooltip.args={
    containerClassName: '',
    label: 'Article description',
    checked: 'checked'
};
export const CheckboxWithError: Story<CheckboxComponent> = Template.bind({});
CheckboxWithError.args={
    containerClassName: '',
    label: 'Danger theme',
    danger: true,
    color: true
};
