
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Surfaces/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent],
    }),
  ],
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  component: TabsComponent,
  props: args,
});

export const Playground = Template.bind({});
Playground.args = {
  tabs: [
    { id: '1', header: 'tab one', content: 'lorem ipsum tab one' },
    { id: '2', header: 'tab two', content: 'lorem ipsum tab two' },
    { id: '3', header: 'tab three', content: 'lorem ipsum tab three' },
    { id: '4', header: 'tab four', content: 'lorem ipsum tab four' },
    { id: '5', header: 'tab five', content: 'lorem ipsum tab five' },
    { id: '6', header: 'tab six', content: 'lorem ipsum tab six' },
  ],
  activeTabId: '1',
  checkmarkTabId: '6'
};
