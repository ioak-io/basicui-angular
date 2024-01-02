import { moduleMetadata } from "@storybook/angular";
import { SwitchComponent } from "./switch.component";

export default{
    title: 'Components/Switch',
    decorations: [
        moduleMetadata({
            declarations: [SwitchComponent],
        }),
    ],
};

export const BasicSwitch = () => ({
    component: SwitchComponent,
    props: {
      isChecked: false,
    },
});

export const SwitchWithPrimary = () => ({
    component: SwitchComponent,
    props: {
      isChecked: false,
      isPrimary: true
    },
});
export const SwitchWithError = () => ({
    component: SwitchComponent,
    props: {
      isChecked: false,
      isError: true
    },
});
