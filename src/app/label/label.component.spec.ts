
import { render, screen } from '@testing-library/angular';
import {
  composeStories,
  composeStory,
  createMountable,
} from '@storybook/testing-angular';
import * as stories from './label.stories';
import Meta from './label.stories';

const { Playground } = composeStories(stories);

describe('LabelComponent', () => {
  it('reuses args from composed story', async () => {
    const { component, applicationConfig } = createMountable(Playground({}));
    await render(component, { providers: applicationConfig.providers });
    expect(screen.getByText(Playground.args?.label!)).not.toBeNull();
  });
});