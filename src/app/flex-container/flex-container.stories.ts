import { Meta, Story } from '@storybook/angular';
import { FlexContainerComponent } from './flex-container.component';

export default {
  title: 'Surfaces/FlexContainer',
  component: FlexContainerComponent,
  argTypes: {
    orientation: { control: 'radio' },
    wrap: { control: 'boolean' },
    alignX: { control: 'radio' },
    alignY: { control: 'radio' },
    gap: { control: 'radio' },
  },
} as Meta;

const Template: Story<FlexContainerComponent> = (args: FlexContainerComponent) => ({
  component: FlexContainerComponent,
  props: args,
  template: `
    <app-flex-container [orientation]="orientation" [wrap]="wrap" [alignX]="alignX" [alignY]="alignY" [gap]="gap">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </app-flex-container>
  `,
});

export const Default = Template.bind({});
Default.args = {
  orientation: 'default',
  wrap: false,
  alignX: 'default',
  alignY: 'default',
  gap: 'default',
};
