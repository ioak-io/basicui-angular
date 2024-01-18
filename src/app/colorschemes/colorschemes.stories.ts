import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ColorSchemesComponent } from './colorschemes.component';
import { ThemesOverviewComponent } from './themes-overview.component';

export default {
  title: 'Styleguide/ColorScheme',
  component: ColorSchemesComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorSchemesComponent, ThemesOverviewComponent],
    }),
  ],
} as Meta;

const Template: Story<ColorSchemesComponent> = (args: ColorSchemesComponent) => ({
  component: ColorSchemesComponent,
  props: args,
});

export const White = Template.bind({});
White.args = {
  discriminator: 'white',
};
export const WhiteExtended = Template.bind({});
WhiteExtended.args = {
  discriminator: 'white-extended',
};
export const Black = Template.bind({});
Black.args = {
  discriminator: 'black',
};
export const BlackExtended = Template.bind({});
BlackExtended.args = {
  discriminator: 'black-extended',
};
export const Default = Template.bind({});
Default.args = {
  discriminator: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  discriminator: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  discriminator: 'danger',
};


