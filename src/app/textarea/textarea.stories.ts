import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TextareaComponent } from "./textarea.component";

const meta: Meta<typeof TextareaComponent> = {

  title: 'Form Elements/Textarea',
  component: TextareaComponent,
  tags: ["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof TextareaComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args,
      label: 'Lorem ipsum',
      placeholder: 'Dolor sit',
      value: ''
    },
  }),
};
