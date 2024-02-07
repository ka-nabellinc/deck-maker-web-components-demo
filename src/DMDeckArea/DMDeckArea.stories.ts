import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";
import "./DMDeckArea";
import type { DMCardData } from "../types";

const DUMMY_CARDS: DMCardData[] = Array(40).fill({
  main_card_id: 100171941,
  thumbnail_url: "card100101000_1.jpg",
  large_image_url: "card100101000_1.jpg",
});

interface Params {
  cards: DMCardData[];
}

const template = ({ cards }: Params) => html`
  <dm-deck-area .cards=${cards} @selectImage=${action('selectImage')}></dm-deck-area>
`;

const meta = {
  title: "dm-deck-area",
  tags: ["autodocs"],
  render: template,
  args: {
    cards: DUMMY_CARDS,
  },
  argTypes: {},
} satisfies Meta<Params>;

export default meta;
type Story = StoryObj<Params>;

export const Main: Story = {};
