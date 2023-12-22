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
    <app-checkbox class="custom-checkbox" style= accent-color:black;></app-checkbox>
    <label for=''>Article description</label>

  `,
});
/*export const CheckboxWithError = () => ({
    template: `
      <app-checkbox [isChecked]="true" class="custom-checkbox" style= accent-color:red;></app-checkbox>
      <label for='' style= color:red;>Danger Theme</label>
    `,
  });*/
  export const CheckboxWithError = () => ({
    template: `
      <app-checkbox class="custom-checkbox" style= accent-color:red;></app-checkbox>
      <label for='' style= color:#f4e7e7; onMouseOver="this.style.color='red'"
      onMouseOut="this.style.color='red'" >Danger Theme</label>
    `,
  });