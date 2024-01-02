import { moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

export default{
    title:'Components/IconButton',
    decorators:[
        moduleMetadata({
            declarations:[IconButtonComponent],
        }),
    ],
};

export const DefaultThemeWithDefaultVariant = () => ({
    component: IconButtonComponent,
    props: {

    },
});
export const DefaultThemeWithOutlineVariant = () => ({
    component: IconButtonComponent,
    props: {
        isDefaultoutlinevariant: true,
    },
});
export const DefaultThemeWithFillVariant = () => ({
    component: IconButtonComponent,
    props: {
        isDefaultfillvariant: true,
    },
});
export const DefaultThemeWithTransparentVariant = () => ({
    component: IconButtonComponent,
    props: {
        isDefaulttransparentvariant: true,
    },
});
export const PrimaryThemeWithPrimaryVariant = () => ({
    component: IconButtonComponent,
    props: {
        isPrimary: true,
    },
});
export const PrimaryThemeWithOutlineVariant = () => ({
    component: IconButtonComponent,
    props: {
        isPrimaryoutlinevariant: true,
    },
});
export const PrimaryThemeWithFillVariant = () => ({
    component: IconButtonComponent,
    props: {
        isPrimaryfillvariant: true,
    },
});
export const PrimaryThemeWithTransparentVariant = () => ({
    component: IconButtonComponent,
    props: {
        isPrimarytransparentvariant: true,
    },
});