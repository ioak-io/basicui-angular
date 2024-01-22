
import { moduleMetadata } from '@storybook/angular';
import { ColorSchemesComponent } from './colorschemes.component';
import { ThemesOverviewComponent } from '../themes-overview/themes-overview.component';

export default {
  title: 'Styleguide/Color Schemes',
  component: ColorSchemesComponent, 
  decorators: [
    moduleMetadata({
      declarations: [ColorSchemesComponent, ThemesOverviewComponent]
    })
  ],
};

export const ThemesOverview = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'adaptive',
  }
});
export const Adaptive = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'adaptive',
  }
});
export const Black = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'black',
  }
});
export const BlackExtended = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'black-extended',
  }
});
export const White = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'white',
  }
});
export const WhiteExtended = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'white-extended',
  }
});
export const Default = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'default',
  }
});
export const DefaultTransparent = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'default-transparent',
  }
});
export const Primary = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'primary',
  }
});
export const PrimaryTransparent = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'primary-transparent',
  }
});
export const Danger = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'danger',
  }
});
export const DangerTransparent = () => ({
  component: ColorSchemesComponent,
  props: {
    discriminator: 'danger-transparent',
  }
});


