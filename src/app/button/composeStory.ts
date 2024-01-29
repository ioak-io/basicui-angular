/*import { render, screen } from '@testing-library/angular';
import {
  composeStory,
  createMountable,
} from '@storybook/testing-angular';
import Meta, { Playground as PrimaryStory } from './button.stories';

const Playground = composeStory(PrimaryStory, Meta);

describe('button', () => {
  it('onclick handler is called', async () => {
    const onClickSpy = jasmine.createSpy();
    const { component, applicationConfig } = createMountable(
        Playground({ onClick: onClickSpy }, {} as any)
    );
    await render(component, { providers: applicationConfig.provider });
    const buttonElement = screen.getByText(Playground.args?.label!);
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});*/