import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
    }),
  ],
} as Meta;

export const BasicCheckbox = () => ({
  template: `
    <app-checkbox></app-checkbox>
    Article description
  `,
  
});

export const CheckboxWithToolitip = () => ({
  template: `
    <app-checkbox [isChecked]="true" class="custom-checkbox" style= accent-color:black;></app-checkbox>
    <label for=''>Article description</label>

  `,
});
export const CheckboxWithError = () => ({
    template: `
      <app-checkbox [isChecked]="true" class="custom-checkbox" style= accent-color:red;></app-checkbox>
      <label for='' style= color:red;>Danger Theme</label>
    `,
  });


























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

/*import { Meta, Story } from '@storybook/angular';
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
};
export const CheckboxWithTooltip: Story<CheckboxComponent> = Template.bind({});
CheckboxWithTooltip.args={
    containerClassName: '',
    label: 'Article description',
};
export const CheckboxWithError: Story<CheckboxComponent> = Template.bind({});
CheckboxWithError.args={
    containerClassName: '',
    label: 'Danger theme',
};*/

