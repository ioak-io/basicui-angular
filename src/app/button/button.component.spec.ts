
import { render, screen } from '@testing-library/angular';
import {
  composeStories,
  createMountable,
} from '@storybook/testing-angular';
import * as stories from './button.stories';
import Meta from './button.stories';

const { Playground } = composeStories(stories);

describe('button', () => {
  it('reuses args from composed story', async () => {
    const { component, applicationConfig } = createMountable(Playground({}));
    await render(component, { providers: applicationConfig.providers });
    expect(screen.getByText(Playground.args?.label!)).not.toBeNull();
  });
});