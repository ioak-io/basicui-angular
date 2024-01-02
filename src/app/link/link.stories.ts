import { moduleMetadata } from "@storybook/angular";
import { LinkComponent } from "./link.component";


export default{
    title: 'Components/Link',
    decorations:[
        moduleMetadata({
            declarations: [LinkComponent],
        }),
    ],
};

export const DefaultLink = () => ({
    component: LinkComponent,
    props: {
        isPrimary: false,
    },
});
export const DefaultLinkWithNoUnderline = () => ({
    component: LinkComponent,
    props: {
        isDefaultnounderline: true,
    },
});
export const DefaultLinkWithNoGlow = () => ({
    component: LinkComponent,
    props: {

    },
});
export const PrimaryLink = () => ({
    component: LinkComponent,
    props: {
        isPrimary: true,
    },
});
export const PrimaryLinkWithNoUnderline = () => ({
    component: LinkComponent,
    props: {
        isPrimary: true,
        isPrimarynounderline: true,
    },
});
export const PrimaryLinkWithNoGlow = () => ({
    component: LinkComponent,
    props: {
        isPrimarynoglow: true,
    },
});