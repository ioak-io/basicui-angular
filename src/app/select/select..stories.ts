/*import { Meta, Story } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';

export default{
    title: 'Components/Select',
    component: SelectComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
            declarations: [SelectComponent]
        })
    ],
    argsTypes: {
        label:{
            control:'text'
        }
    }
} as Meta;

const Template: Story<SelectComponent> =(args:SelectComponent) =>({
    component: SelectComponent,
    props:args
});
export const Default: Story<SelectComponent> = Template.bind({});
Default.args={
    containerClassName='',
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
};*/
import { SelectComponent } from './select.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
    }),
  ],
};

export const SingleSelect = () => ({
  component: SelectComponent,
  props: {
    options: [
      { value: 'option1', label: 'Lorem ipsum' },
      { value: 'option2', label: 'Dolor sit' },
      { value: 'option3', label: 'Another long text another long text another long text' },
    ],
  },
});
export const MultiSelect = () => ({
    component: SelectComponent,
    props: {
      options: [
        { value: 'option1', label: 'Lorem ipsum' },
        { value: 'option2', label: 'Dolor sit' },
        { value: 'option3', label: 'Another long text another long text another long text' },
      ],
    },
  });
  export const AutoComplete = () => ({
    component: SelectComponent,
    props: {
      options: [
        { value: 'option1', label: 'Auto complete DropDown' },
        { value: 'option1', label: ' ' },
        { value: 'option1', label: 'Lorem ipsum' },
        { value: 'option2', label: 'Dolor sit' },
        { value: 'option3', label: 'Another long text another long text another long text' },
      ],
    },
  });
  export const AutocompleteMultiSelect = () => ({
    component: SelectComponent,
    props: {
      options: [
        { value: 'option1', label: 'Lorem ipsum' },
        { value: 'option2', label: 'Dolor sit' },
        { value: 'option3', label: 'Another long text another long text another long text' },
      ],
    },
  });