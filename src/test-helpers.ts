import { within, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export async function withinShadowRoot(customElement: HTMLElement, tagName: keyof HTMLElementTagNameMap) {
  const webc = customElement.getElementsByTagName(tagName)[0];
  
  await waitFor(
      () => {
          const shadowRootFirstEl = webc.shadowRoot!.firstElementChild as HTMLElement;
          return expect(shadowRootFirstEl).toContainElement(shadowRootFirstEl);
      },
      { timeout: 1000 },
  );

  // force type HTMLElement to ignore the type checking of the "within" function
  return within(webc.shadowRoot as any as HTMLElement);
}
