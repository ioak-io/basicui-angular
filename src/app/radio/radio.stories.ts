import { moduleMetadata } from "@storybook/angular";
import { RadioComponent } from './radio.component';

export default{
    title: 'Components/Radio',
    decorators: [
        moduleMetadata({
            declarations: [RadioComponent],
        }),
    ],
};

export const BasicRadio = () =>({
    component: RadioComponent,
    props: {
        label:'Article Description',
        isChecked: false,
        isError: false,
        isPrimary: false,
    },
});
export const RadioWithPrimary = () => ({
    component: RadioComponent,
    props: {
        label:'Article Description',
        isChecked: false,
        isError: false,
        isPrimary: true,
    },
});
export const RadioWithError = () => ({
    component: RadioComponent,
    props: {
        label:'Article Description',
        isChecked: false,
        isError: true,
        isPrimary: false,
    },
});