import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';

const meta: Meta<typeof SelectComponent> = {

  title: 'Form Elements/Select Native',
  component: SelectComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Playground: Story = {
  render: () => ({
    props: {
      label: 'Lorem ipsum',
      selectType: 'single',
      options: [
        { value: '1', label: 'Lorem ipsum' },
        { value: '2', label: 'Another long text another long text' },
        { value: '3', label: 'Dolor sit' },
      ],
      selectedValue: 'Dolor sit',
    },
  }),
};
