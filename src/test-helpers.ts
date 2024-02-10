import { within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { DMDeckData } from "./types";

export async function withinShadowRoot(
  customElement: HTMLElement,
  tagName: keyof HTMLElementTagNameMap
) {
  const webc = customElement.getElementsByTagName(tagName)[0];

  await waitFor(
    () => {
      const shadowRootFirstEl = webc.shadowRoot!
        .firstElementChild as HTMLElement;
      return expect(shadowRootFirstEl).toContainElement(shadowRootFirstEl);
    },
    { timeout: 1000 }
  );

  // force type HTMLElement to ignore the type checking of the "within" function
  return within(webc.shadowRoot as any as HTMLElement);
}

export const dmDeckFactory = (params: Partial<DMDeckData> = {}): DMDeckData => {
  return {
    dm_deck_id: "7d3c6dd0-163c-438e-937c-de742098d9c2",
    uid: "SaFzMJeo28hzE2iNyiasnoWX0ZN",
    author_display_name: "名も無き旅人",
    likes: 3068,
    name: "安価赤青緑ジョーカーズ",
    thumbnail_url: "card100180740_1.jpg",
    regulation_type: "none",
    dm_deck_type_id: "200033",
    legend: false,
    zeron: false,
    dorumagedon: false,
    has_fire: true,
    has_water: true,
    has_light: false,
    has_dark: false,
    has_nature: true,
    has_zero: true,
    main_cards: [
      {
        large_image_url: "card100248203_1.jpg",
        main_card_id: 141921,
        thumbnail_url: "card100248203_1.jpg",
      },
      {
        large_image_url: "card100248203_1.jpg",
        main_card_id: 141921,
        thumbnail_url: "card100248203_1.jpg",
      },
      {
        large_image_url: "card100248203_1.jpg",
        main_card_id: 141921,
        thumbnail_url: "card100248203_1.jpg",
      },
      {
        large_image_url: "card100248203_1.jpg",
        main_card_id: 141921,
        thumbnail_url: "card100248203_1.jpg",
      },
      {
        large_image_url: "card100167222_1.jpg",
        main_card_id: 131799,
        thumbnail_url: "card100167222_1.jpg",
      },
      {
        large_image_url: "card100167222_1.jpg",
        main_card_id: 131799,
        thumbnail_url: "card100167222_1.jpg",
      },
      {
        large_image_url: "card100167222_1.jpg",
        main_card_id: 131799,
        thumbnail_url: "card100167222_1.jpg",
      },
      {
        large_image_url: "card100167222_1.jpg",
        main_card_id: 131799,
        thumbnail_url: "card100167222_1.jpg",
      },
      {
        large_image_url: "card100247744_1.jpg",
        main_card_id: 139578,
        thumbnail_url: "card100247744_1.jpg",
      },
      {
        large_image_url: "card100247744_1.jpg",
        main_card_id: 139578,
        thumbnail_url: "card100247744_1.jpg",
      },
      {
        large_image_url: "card100247744_1.jpg",
        main_card_id: 139578,
        thumbnail_url: "card100247744_1.jpg",
      },
      {
        large_image_url: "card100247744_1.jpg",
        main_card_id: 139578,
        thumbnail_url: "card100247744_1.jpg",
      },
      {
        large_image_url: "card100274292_1.jpg",
        main_card_id: 126693,
        thumbnail_url: "card100274292_1.jpg",
      },
      {
        large_image_url: "card100274292_1.jpg",
        main_card_id: 126693,
        thumbnail_url: "card100274292_1.jpg",
      },
      {
        large_image_url: "card100274292_1.jpg",
        main_card_id: 126693,
        thumbnail_url: "card100274292_1.jpg",
      },
      {
        large_image_url: "card100274292_1.jpg",
        main_card_id: 126693,
        thumbnail_url: "card100274292_1.jpg",
      },
      {
        large_image_url: "card100180761_1.jpg",
        main_card_id: 108030,
        thumbnail_url: "card100180761_1.jpg",
      },
      {
        large_image_url: "card100180761_1.jpg",
        main_card_id: 108030,
        thumbnail_url: "card100180761_1.jpg",
      },
      {
        large_image_url: "card100180761_1.jpg",
        main_card_id: 108030,
        thumbnail_url: "card100180761_1.jpg",
      },
      {
        large_image_url: "card100180761_1.jpg",
        main_card_id: 108030,
        thumbnail_url: "card100180761_1.jpg",
      },
      {
        large_image_url: "card100124664_1.jpg",
        main_card_id: 38566,
        thumbnail_url: "card100124664_1.jpg",
      },
      {
        large_image_url: "card100124664_1.jpg",
        main_card_id: 38566,
        thumbnail_url: "card100124664_1.jpg",
      },
      {
        large_image_url: "card100060921_1.jpg",
        main_card_id: 34864,
        thumbnail_url: "card100060921_1.jpg",
      },
      {
        large_image_url: "card100060921_1.jpg",
        main_card_id: 34864,
        thumbnail_url: "card100060921_1.jpg",
      },
      {
        large_image_url: "card100225877_1.jpg",
        main_card_id: 154577,
        thumbnail_url: "card100225877_1.jpg",
      },
      {
        large_image_url: "card100225877_1.jpg",
        main_card_id: 154577,
        thumbnail_url: "card100225877_1.jpg",
      },
      {
        large_image_url: "card100225877_1.jpg",
        main_card_id: 154577,
        thumbnail_url: "card100225877_1.jpg",
      },
      {
        large_image_url: "card100171836_1.jpg",
        main_card_id: 139527,
        thumbnail_url: "card100171836_1.jpg",
      },
      {
        large_image_url: "card100171836_1.jpg",
        main_card_id: 139527,
        thumbnail_url: "card100171836_1.jpg",
      },
      {
        large_image_url: "card100171836_1.jpg",
        main_card_id: 139527,
        thumbnail_url: "card100171836_1.jpg",
      },
      {
        large_image_url: "card100274253_1.jpg",
        main_card_id: 37320,
        thumbnail_url: "card100274253_1.jpg",
      },
      {
        large_image_url: "card100274253_1.jpg",
        main_card_id: 37320,
        thumbnail_url: "card100274253_1.jpg",
      },
      {
        large_image_url: "card100180740_1.jpg",
        main_card_id: 142263,
        thumbnail_url: "card100180740_1.jpg",
      },
      {
        large_image_url: "card100180740_1.jpg",
        main_card_id: 142263,
        thumbnail_url: "card100180740_1.jpg",
      },
      {
        large_image_url: "card100180740_1.jpg",
        main_card_id: 142263,
        thumbnail_url: "card100180740_1.jpg",
      },
      {
        large_image_url: "card100180740_1.jpg",
        main_card_id: 142263,
        thumbnail_url: "card100180740_1.jpg",
      },
      {
        large_image_url: "card100274190_1.jpg",
        main_card_id: 170229,
        thumbnail_url: "card100274190_1.jpg",
      },
      {
        large_image_url: "card100274190_1.jpg",
        main_card_id: 170229,
        thumbnail_url: "card100274190_1.jpg",
      },
      {
        large_image_url: "card100274190_1.jpg",
        main_card_id: 170229,
        thumbnail_url: "card100274190_1.jpg",
      },
      {
        large_image_url: "card100274190_1.jpg",
        main_card_id: 170229,
        thumbnail_url: "card100274190_1.jpg",
      },
    ],
    gr_cards: [
      {
        large_image_url: "card100238729_1.jpg",
        main_card_id: 135375,
        thumbnail_url: "card100238729_1.jpg",
      },
      {
        large_image_url: "card100238729_1.jpg",
        main_card_id: 135375,
        thumbnail_url: "card100238729_1.jpg",
      },
      {
        large_image_url: "card100185639_1.jpg",
        main_card_id: 144198,
        thumbnail_url: "card100185639_1.jpg",
      },
      {
        large_image_url: "card100185639_1.jpg",
        main_card_id: 144198,
        thumbnail_url: "card100185639_1.jpg",
      },
      {
        large_image_url: "card100184955_1.jpg",
        main_card_id: 139599,
        thumbnail_url: "card100184955_1.jpg",
      },
      {
        large_image_url: "card100184955_1.jpg",
        main_card_id: 139599,
        thumbnail_url: "card100184955_1.jpg",
      },
      {
        large_image_url: "card100180779_1.jpg",
        main_card_id: 142305,
        thumbnail_url: "card100180779_1.jpg",
      },
      {
        large_image_url: "card100180779_1.jpg",
        main_card_id: 142305,
        thumbnail_url: "card100180779_1.jpg",
      },
      {
        large_image_url: "card100147176_1.jpg",
        main_card_id: 132048,
        thumbnail_url: "card100147176_1.jpg",
      },
      {
        large_image_url: "card100147176_1.jpg",
        main_card_id: 132048,
        thumbnail_url: "card100147176_1.jpg",
      },
      {
        large_image_url: "card100180737_1.jpg",
        main_card_id: 142260,
        thumbnail_url: "card100180737_1.jpg",
      },
      {
        large_image_url: "card100180737_1.jpg",
        main_card_id: 142260,
        thumbnail_url: "card100180737_1.jpg",
      },
    ],
    hyper_spatial_cards: [],
    created_at: 1672796806256,
    updated_at: 1689210085391,
    views: 37842,
    ...params,
  };
};
