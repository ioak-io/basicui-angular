import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { AppshellComponent } from './appshell.component';
// import { StoryWrapperComponent } from './story-wrapper.component';


export default {
  title: 'Layout/AppShell',
  component: AppshellComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppshellComponent],
      
    }),
  ],
} as Meta;

const Template: Story<AppshellComponent> = (args: AppshellComponent) => ({
  component: AppshellComponent,
  props: args,
});

export const Playground = Template.bind({});
Playground.args = {
  isSidebarExpanded: true,
  isDarkMode: false,
  logoIconWhite: './logo/neuralweb_white_small.svg',
  logoTextWhite: "./logo/neuralweb_white_text.svg",
  logoIconBlack: "./logo/neuralweb_black_small.svg",
  logoTextBlack: "./logo/neuralweb_black_text.svg",
};

export const WithContent = Template.bind({});
WithContent.args = {
  isSidebarExpanded: true,
  isDarkMode: false,
  logoIconWhite: './logo/neuralweb_white_small.svg',
  logoTextWhite: "./logo/neuralweb_white_text.svg",
  logoIconBlack: "./logo/neuralweb_black_small.svg",
  logoTextBlack: "./logo/neuralweb_black_text.svg",
  navbar: `<header>COM</header>
           <div>Navbar content</div>
           <footer>Navbar footer</footer>`,
  body: `<p>Main body content goes here.</p>`,
  mobileNavbar: `<p>Mobile Navbar content goes here.</p>`,
};
