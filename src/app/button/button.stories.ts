import {Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";

export default{
    title: 'Form Elements/Button',
    component: ButtonComponent
} as Meta;

interface ButtonProps extends ButtonComponent{
    label: string;
}

// const Template: Story<ButtonComponent> =({label, className,disabled}: Partial<ButtonProps>) =>({
//     component: ButtonComponent,
//     moduleMetadata: {
//         declarations: [ButtonComponent],
//         import:[]
//     },
//     template:`<app-button [disabled]='${disabled}' class='${className}'>${label}</app-button>`
// });

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args
});

// export const Primary: Story<ButtonProps> = Template.bind({});
//     Primary.args = {
//         className: 'btn-primary',
//         label: 'Primary',
//         disabled: false
//     };
// export const Secondary: Story<ButtonProps> = Template.bind({});
// Secondary.args = {
//     className: 'btn-secondary',
//     label: 'Secondary'
// };
// export const Empty: Story<ButtonProps> = Template.bind({});
// Empty.args = {
//     icon:'times',
//     className: 'btn-empty',
//     label: 'Cancel'
// };
// export const Outline: Story<ButtonProps> = Template.bind({});
// Outline.args = {
//     icon:'times',
//     className: 'btn-outline',
//     label: 'Outline'
// };

// export const DefaultThemeWithDefaultVariant: Story<ButtonProps> = Template.bind({});
// DefaultThemeWithDefaultVariant.args = {
//     icon:'times',
//     // className: 'Default-Theme-With-Default-Variant',
//     label: 'Default Theme With Default Variant',
//     disabled: false,
//     theme: ThemeType.default,
//     variant: ButtonVariantType.default,
// };

// Reuse that template for creating different stories
export const DefaultThemeWithDefaultVariant : Story<ButtonProps> = Template.bind({});
DefaultThemeWithDefaultVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.default,
  disabled: true
};

export const DefaultThemeWithOutlineVariant: Story<ButtonProps>  = Template.bind({});
DefaultThemeWithOutlineVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.outline,
};

export const DefaultThemeWithFillVariant: Story<ButtonProps>  = Template.bind({});
DefaultThemeWithFillVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.fill,
};

export const DefaultThemeWithTransparentVariant: Story<ButtonProps>  = Template.bind({});
DefaultThemeWithTransparentVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.transparent,
};

// Primary theme
export const PrimaryThemeWithPrimaryVariant: Story<ButtonProps>  = Template.bind({});
PrimaryThemeWithPrimaryVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
};

export const PrimaryThemeWithOutlineVariant: Story<ButtonProps>  = Template.bind({});
PrimaryThemeWithOutlineVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.outline,
};

export const PrimaryThemeWithFillVariant: Story<ButtonProps>  = Template.bind({});
PrimaryThemeWithFillVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.fill,
};

export const PrimaryThemeWithTransparentVariant: Story<ButtonProps>  = Template.bind({});
PrimaryThemeWithTransparentVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.transparent,
};


// Danger theme
export const DangerThemeWithDangerVariant: Story<ButtonProps>  = Template.bind({});
DangerThemeWithDangerVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.default,
};

export const DangerThemeWithOutlineVariant: Story<ButtonProps>  = Template.bind({});
DangerThemeWithOutlineVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.outline,
};

export const DangerThemeWithFillVariant: Story<ButtonProps>  = Template.bind({});
DangerThemeWithFillVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.fill,
};

export const DangerThemeWithTransparentVariant: Story<ButtonProps> = Template.bind({});
DangerThemeWithTransparentVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.transparent
};
