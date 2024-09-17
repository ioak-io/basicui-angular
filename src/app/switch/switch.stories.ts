import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

const meta: Meta<SwitchComponent> = {

  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ["autodocs"],
  argTypes: {
    theme:{
    control: {type: 'select',},
    options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']   
  },
  size:{
    control: {type:'radio'},
    options: ['default', 'small', 'medium', 'large']
  }
  },
} as Meta<SwitchComponent>;

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args
    },
  }),
  args:{
    theme: 'primary',
    size: 'small',
    checked: false
  }
};

// export const BasicSwitch = Template.bind({});

