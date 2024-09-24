import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import ThemeType from '../types/ThemeType';

const Template = (args: TableComponent) => ({
  props: args,
});

const meta: Meta<TableComponent> = {

  title: 'Surfaces/Table',
  component: TableComponent,
  tags: ["autodocs"],
  argTypes: {
    theme:{
      control: {type: 'radio'},
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
    }
  },
} as Meta;

export default meta;
type Story = StoryObj<TableComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args
    },
  }),
};