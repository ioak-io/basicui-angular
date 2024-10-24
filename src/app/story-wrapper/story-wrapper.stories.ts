import { moduleMetadata } from '@storybook/angular';
import { StoryWrapperComponent } from './story-wrapper.component';
import { ModalComponent } from '../modal/modal.component';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';

export default {
  title: 'Surfaces/Story Wrapper',
  component: StoryWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [StoryWrapperComponent, ModalComponent]
    })
  ]
};
// Playground.storyName = 'Story Wrapper Playground';
export const Playground = () => ({
  component: StoryWrapperComponent,
  props: {
    theme: ThemeType.default,
    variant: ButtonVariantType.default,
  }
});