import { Meta,moduleMetadata,Story } from '@storybook/angular';
import { TypographyComponent } from './typography.component';
import { DemoSectionComponent } from '../demosection/demosection.component';

export default {
  title: 'Styleguide/Typography',
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, DemoSectionComponent],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  component: TypographyComponent,
  props: args,
});

export const Playground = Template.bind({});
Playground.args = {
    heading: 'Demo Section Heading',
};