import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
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
  docs: { inlineStories: true },
}