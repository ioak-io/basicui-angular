import { Meta, Story } from '@storybook/angular';
import { SelectNativeComponent } from './select-native.component';

export default {
  title: 'Form elements/SelectNative',
  component: SelectNativeComponent,
  argTypes: {
  },
} as Meta<SelectNativeComponent>;

const Template: Story<SelectNativeComponent> = (args: SelectNativeComponent) => ({
  props: args,
});

export const Playground = Template.bind({});
Playground.args = {
  initialValues: ['Dolor sit'],
  options: [
    { name: 'Lorem ipsum', value: 'Lorem ipsum' },
    { name: 'Dolor sit', value: 'Dolor sit' },
    { name: 'another long text', value: 'another long text' }
  ],
  placeholder: 'Default drop down',
  label: 'Lorem ipsum',
};
