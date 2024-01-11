
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);
//import './style.css';
//import '../src/app/styles/index.css';
import { themes } from '@storybook/theming';
import { addons } from '@storybook/preview-api';

const channel = addons.getChannel();

export const parameters = {
  docs:{},
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Styleguide', 'Atoms', 'Molecules', 'Organisms'],
        locales: 'en-US',
    }
},

  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
    darkClass: 'basicui-dark',
    lightClass: 'basicui-light',
    stylePreview: true,
    classTarget: 'html'
  }
};

