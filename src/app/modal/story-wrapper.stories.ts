import { moduleMetadata } from '@storybook/angular';
import { StoryWrapperComponent } from './story-wrapper.component';
import { ModalComponent } from './modal.component';

export default {
  title: 'Surfaces/Modal',
  component: StoryWrapperComponent, 
  decorators: [
    moduleMetadata({
      declarations: [StoryWrapperComponent, ModalComponent]
    })
  ]
};

export const Playground = () => ({
  component: StoryWrapperComponent,
  props: {}
});