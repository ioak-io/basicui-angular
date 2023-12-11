import { BreadcrumbsComponent } from "./breadcrumbs.component";
import{ Meta, Story } from '@storybook/angular';

export default{
    title: 'Components/Breadcrumbs',
    component: BreadcrumbsComponent
} as Meta;

const Template: Story<BreadcrumbsComponent> = (args :BreadcrumbsComponent) => ({
    component: BreadcrumbsComponent,
    props: args
});
export const Default: Story<BreadcrumbsComponent> = Template.bind({});
Default.args = {
    items: ['Projects', 'Angular Jira Clone', 'Kanban Board']
};