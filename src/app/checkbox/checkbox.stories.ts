import { moduleMetadata } from "@storybook/angular";
import { CheckboxComponent } from './checkbox.component';

export default{
    title: 'Components/Checkbox',
    decorators: [
        moduleMetadata({
            declarations: [CheckboxComponent],
        }),
    ],
};

export const BasicCheckbox = () =>({
    component: CheckboxComponent,
    props: {
        label:'Article Description',
        isChecked: false,
        isError: false,
        isTooltip: false,
    },
});
export const CheckboxWithTooltip = () => ({
    component: CheckboxComponent,
    props: {
        label:'Article Description',
        isChecked: false,
        isError: false,
        isTooltip: true,
    },
});
export const CheckboxWithError = () => ({
    component: CheckboxComponent,
    props: {
        label:'Danger theme',
        isChecked: false,
        isError: true,
        isTooltip: false,
    },
});