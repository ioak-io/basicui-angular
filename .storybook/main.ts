import type { AddonOptionsBabel } from '@storybook/addon-coverage';
import type { StorybookConfig } from '@storybook/angular';
const coverageConfig: AddonOptionsBabel = {
  include: ['**/stories/**'],
  exclude: ['**/exampleDirectory/**'],
  excludeNodeModules: true,
};
const config: StorybookConfig = {
  stories: ['../src/app/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-mdx-gfm',
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
          ...coverageConfig,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;