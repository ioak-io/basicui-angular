
import {Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";

const meta: Meta<typeof IconButtonComponent> = {
  
  title: 'Form Elements/Icon Button',
  component: IconButtonComponent,
  tags:["autodocs"],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof IconButtonComponent>;

export const Playground:  Story = {
  render:() => ({
    props:{
      theme: ThemeType.primary,
      variant: ButtonVariantType.default,
      circle: false,
    },
  }),
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