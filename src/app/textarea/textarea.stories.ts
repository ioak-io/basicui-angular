import { moduleMetadata } from "@storybook/angular";
import { TextareaComponent } from "./textarea.component";

export default{
    title:'Form Elements/Textarea',
    decorations: [
        moduleMetadata({
            declarations:[TextareaComponent],
        }),
    ],
};

export const BasicTextarea = () => ({
    component: TextareaComponent,
    props: {
        label: 'Article Description',
        placeholder: 'Lorem ipsum dolor sit',
        value:'',
    },
});
export const TextareaWithTooltip= () => ({
    component: TextareaComponent,
    props: {
        label: 'Article Description',
        placeholder: 'Lorem ipsum dolor sit',
        isTooltip: true,
        value: '',
        tooltipMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
});
export const TextareaWithError = () => ({
    component: TextareaComponent,
    props: {
      label: 'Article Description',
      placeholder: 'Lorem ipsum dolor sit',
      value: '',
      isError: true,
      errorMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
  });
  export const TextareaWithWarning = () => ({
    component: TextareaComponent,
    props: {
        label: 'Article Description',
        placeholder: 'Lorem ipsum dolor sit',
        isWarning: true,
        value: '',
        warningMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
});
export const TextareaWithSuccess = () => ({
    component: TextareaComponent,
    props: {
        label: 'Article Description',
        placeholder: 'Lorem ipsum dolor sit',
        isSuccess: true,
        value: '',
        successMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
});
export const TextareaWithTooltipAndError = () => ({
    component: TextareaComponent,
    props: {
        label: 'Article Description',
        placeholder: 'Lorem ipsum dolor sit',
        isTooltip: true,
        isError: true,
        tooltipMessage: 'Ipsum dolor sit',
        errorMessage: 'Quisque tincidunt vitae purus id feugiat',
    },
});