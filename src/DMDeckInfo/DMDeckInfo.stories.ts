import type { Meta, StoryObj } from "@storybook/web-components"
import { html } from "lit";
import "./DMDeckInfo";
import type { DMDeckData } from "../types";

const getDeckdata = (params: Partial<DMDeckData> = {}): DMDeckData => {
  return {
    dm_deck_id: '7d3c6dd0-163c-438e-937c-de742098d9c2',
    uid: 'SaFzMJeo28hzE2iNyiasnoWX0ZN',
    author_display_name: '名も無き旅人',
    likes: 3068,
    name: '安価赤青緑ジョーカーズ',
    thumbnail_url: 'card100180740_1.jpg',
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
    main_cards: [],
    gr_cards: [],
    hyper_spatial_cards: [],
    created_at: 1672796806256,
    updated_at: 1689210085391,
    views: 37842,
    ...params
  }
} 

interface Params {
  deck: DMDeckData
}

const template = ({ deck }: Params) => html`
  <dm-deck-info .deckData=${deck}></dm-deck-info>
`;

const meta = {
  title: "dm-deck-info",
  tags: ["autodocs"],
  render: template,
  args: {
    deck: getDeckdata(),
  },
  argTypes: {},
} satisfies Meta<Params>;

export default meta;
type Story = StoryObj<Params>;

export const Default: Story = {};

export const Advance: Story = {
  args: {
    deck: getDeckdata({ regulation_type: 'advance' })
  }
};

export const TwoBlock: Story = {
  args: {
    deck: getDeckdata({ regulation_type: '2block', name: 'DS モルト「王」', thumbnail_url: 'card100020715_1.jpg' })
  }
};

export const Party: Story = {
  args: {
    deck: getDeckdata({ regulation_type: 'party', name: 'テラフォーム', thumbnail_url: 'card100015813_1.jpg' })
  }
};

export const Original: Story = {
  args: {
    deck: getDeckdata({ regulation_type: 'original', name: '4Cディスペクター', thumbnail_url: 'card100246247_1.jpg' })
  }
};
