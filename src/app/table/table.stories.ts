import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import ThemeType from '../types/ThemeType';

const Template = (args: TableComponent) => ({
  props: args,
});

const meta: Meta<typeof TableComponent> = {

  title: 'Surfaces/Table',
  component: TableComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof TableComponent>;

export const Playground: Story = {
  render: () => ({
    props: {
    },
  }),
};