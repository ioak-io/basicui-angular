import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import ThemeType from '../types/ThemeType';

const meta: Meta<typeof InputComponent> = {

  title: 'Form Elements/Input',
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Playground: Story = {
  render: () => ({
    props: {
      label: 'First Name',
      isInfo: true,
      value: 'Dolor sit',
      infoMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
  }),
};