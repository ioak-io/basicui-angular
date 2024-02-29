import { moduleMetadata } from '@storybook/angular';
import { ModalFooterComponent } from './modal-footer.component';

export default {
  title: 'Surfaces/Modal Footer',
  component: ModalFooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [ModalFooterComponent]
    })
  ]
};

export const Playground = () => ({
  component: ModalFooterComponent,
  props: {}
});