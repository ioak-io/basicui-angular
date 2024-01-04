import { moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'Form Elements/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
    }),
  ],
};

export const SingleSelect = () => ({
  component: SelectComponent,
  props: {
    selectType: 'single',
    options: [
      { value: '1', label: 'Lorem ipsum' },
      { value: '2', label: 'Another long text another long text' },
      { value: '3', label: 'Dolor sit' },
    ],
    selectedValue: 'Dolor sit', 
  },
});

/*export const MultiSelect = () => ({
  component: SelectComponent,
  props: {
    selectType: 'multi',
    options: [
      { value: '1', label: 'Lorem ipsum' },
      { value: '2', label: 'Dolor sit' },
      { value: '3', label: 'Another long text another long text' },
      
    ],
    selectedValue: 'Dolor sit',
    selectedValues: ['Lorem ipsum','Dolor sit'],
  },
});*/

export const Autocomplete = () => ({
  component: SelectComponent,
  props: {
    selectType: 'autocomplete',
    options: [
      { value: '1', label: 'Lorem ipsum' },
      { value: '2', label: 'Dolor sit' },
      { value: '3', label: 'Another long text another long text' },
    ],
    selectedValue: 'Dolor sit', 
    placeholder: 'Enter select option'
  },
});
/*export const AutocompleteMultiSelect = () => ({
  component: SelectComponent,
  props: {
    selectType: 'autocomplete',
    options: [
      { value: '1', label: 'Lorem ipsum' },
      { value: '2', label: 'Dolor sit' },
      { value: '3', label: 'Another long text another long text' },
    ],
    selectedValues: ['Dolor sit', 'Lorem ipsum', 'Another long text another long text'],
  },
});*/

