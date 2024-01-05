
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import ButtonVariantType  from '../types/ButtonVariantType';
import ThemeType from '../types/ThemeType';

export default {
  title: 'Form Elements/Icon Button',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconButtonComponent]
    })
  ]
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  component: IconButtonComponent,
  props: args
});

export const DefaultThemeWithDefaultVariant = Template.bind({});
DefaultThemeWithDefaultVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.default,
  circle: true,
};
export const DefaultThemeWithFillVariant = Template.bind({});
DefaultThemeWithFillVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.fill,
  circle: false,
};
export const DefaultThemeWithOutlineVariant = Template.bind({});
DefaultThemeWithOutlineVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.outline,
  circle: false,
};
export const DefaultThemeWithTransparentVariant = Template.bind({});
DefaultThemeWithTransparentVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.transparent,
  circle: false,
};
export const PrimaryThemeWithPrimaryVariant = Template.bind({});
PrimaryThemeWithPrimaryVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
  circle: false,
};
export const PrimaryThemeWithFillVariant = Template.bind({});
PrimaryThemeWithFillVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.fill,
  circle: false,
};
export const PrimaryThemeWithOutlineVariant = Template.bind({});
PrimaryThemeWithOutlineVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.outline,
  circle: false,
};
export const PrimaryThemeWithTransparentVariant = Template.bind({});
PrimaryThemeWithTransparentVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.transparent,
  circle: false,
};
















/*import { moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import ButtonVariantType  from '../types/ButtonVariantType';
import ThemeType from '../types/ThemeType';

export default {
  title: 'Form Elements/Icon Button',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconButtonComponent],
    }),
  ],
};

export const DefaultThemeWithDefaultVariant = () => ({
  component: IconButtonComponent,
  props: {
    theme: ThemeType.default,
    variant: ButtonVariantType.default,
    loading: false,
    circle: 'true'
  },
});

export const DefaultThemeWithOutlineVariant = () => ({
  component: IconButtonComponent,
  props: {
    theme: ThemeType.default,
    variant: ButtonVariantType.outline,
    loading: true,
  },
});
export const DefaultThemeWithFillVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.default,
      variant: ButtonVariantType.fill,
      loading: true,
    },
  });
  export const DefaultThemeWithTransparentVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.default,
      variant: ButtonVariantType.transparent,
      loading: true,
    },
  });
  export const PrimaryThemeWithPrimaryVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.primary,
      variant: ButtonVariantType.default,
      loading: true,
    },
  });
  export const PrimaryThemeWithOutlineVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.primary,
      variant: ButtonVariantType.outline,
      loading: true,
    },
  });
  export const PrimaryThemeWithFillVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.primary,
      variant: ButtonVariantType.fill,
      loading: true,
    },
  });
  export const PrimaryThemeWithTransparentVariant = () => ({
    component: IconButtonComponent,
    props: {
      theme: ThemeType.primary,
      variant: ButtonVariantType.transparent,
      loading: true,
    },
  });*/