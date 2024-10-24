import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import ThemeType from "../types/ThemeType";

const meta: Meta<CheckboxComponent> = {

  title: 'Form Elements/Checkbox',
  component: CheckboxComponent,
  tags: ["autodocs"],
  argTypes: {
    theme:{
      control: {type: 'radio'},
      options:['default', 'primary', 'secondary', 'success', 'warning', 'danger']
    }
  },
} as Meta<CheckboxComponent>;

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args,
      theme: args.theme,
      checked: args.checked,
      checkedChange: action('checkedChange'),
    },
  }),
  args:{
    theme: 'default',
    checked: true
  }
};
