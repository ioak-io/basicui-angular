import { moduleMetadata } from "@storybook/angular";
import { LabelComponent } from './label.component'

export default{
    title: 'Form Elements/Label',
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