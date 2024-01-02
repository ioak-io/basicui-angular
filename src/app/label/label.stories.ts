import { moduleMetadata } from "@storybook/angular";
import { LabelComponent } from './label.component'

export default{
    title: 'Components/Label',
    decorators:[
        moduleMetadata({
            declarations: [LabelComponent],
        }),
    ],
};

export const BasicLabel =() =>({
    component: LabelComponent,
    props: {
        label: 'Lorem ipsum Dolor sit'
    },
});