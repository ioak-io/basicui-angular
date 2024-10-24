import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

const meta: Meta<SwitchComponent> = {

  title: 'Form Elements/Switch',
  component: SwitchComponent,
  tags: ["autodocs"],
  decorators:[
    moduleMetadata({
      declarations: [SwitchComponent, SvgIconComponent]
    })
  ],
  argTypes: {
    theme:{
    control: {type: 'select',},
    options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']   
  },
  size:{
    control: {type:'radio'},
    options: ['default', 'small', 'medium', 'large', 'xlarge']
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
    size: 'xlarge',
    checked: false,
    icon: ["icon-unchecked", "icon-checked"],
  }
};

// export const BasicSwitch = Template.bind({});

