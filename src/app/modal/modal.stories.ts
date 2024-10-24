import { Meta, moduleMetadata, Story } from '@storybook/angular';
// import { ModalFooterComponent } from './modal-footer.component';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';
import { ModalComponent } from './modal.component';

export default {
  title: 'Surfaces/Modal',
  component: ModalComponent,
  argTypes:{
    theme:{
      control: {type: 'select',},
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']   
    },
    variant:{
      control: {type: 'select',},
      options: ["default", "outline", "fill", "chroma", "transparent"]   
    }
  },

} as Meta;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  component: ModalComponent,
  props: args,
})

export const Playground = Template.bind({});
Playground.args =  ({
  theme : ThemeType.primary,
  variant : ButtonVariantType.default
});