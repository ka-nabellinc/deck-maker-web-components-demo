import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";
import type { Tab } from './DMTabs'
import "./DMTabs"

interface Params {
  currentTab: Tab;
  mainCardsLengh: number;
  grCardsLengh: number;
  hyperSpatialCardsLengh: number;
  hasDorumagedon: boolean;
  hasZeron: boolean;
}

const template = ({
  currentTab,
  mainCardsLengh,
  grCardsLengh,
  hyperSpatialCardsLengh,
  hasDorumagedon,
  hasZeron,
}: Params) => html`
  <dm-tabs
    currentTab=${currentTab}
    mainCardsLengh=${mainCardsLengh}
    grCardsLengh=${grCardsLengh}
    hyperSpatialCardsLengh=${hyperSpatialCardsLengh}
    ?hasDorumagedon=${hasDorumagedon}
    ?hasZeron=${hasZeron}
    @change=${action('onChange')}
  ></dm-tabs>
`;

const meta = {
  title: "dm-tabs",
  tags: ["autodocs"],
  render: template,
  args: {
    mainCardsLengh: 40,
    grCardsLengh: 12,
    hyperSpatialCardsLengh: 8,
  },
  argTypes: {
    currentTab: {
      control: { type: 'select' },
      options: ["main", "gr", "hyperSpatial", "dorumagedon", "zeron"],
    },
    mainCardsLengh: { control: { type: 'number' } },
    grCardsLengh: { control: { type: 'number' } },
    hyperSpatialCardsLengh: { control: { type: 'number' } },
    hasDorumagedon: { control: 'boolean' },
    hasZeron: { control: 'boolean' }
  },
} satisfies Meta<Params>;

export default meta;
type Story = StoryObj<Params>;

export const Main: Story = {
  args: {
    currentTab: "main",
  },
};

export const GR: Story = {
  args: {
    currentTab: "gr",
  },
};

export const HyperSpatial: Story = {
  args: {
    currentTab: 'hyperSpatial',
  },
};

export const Dorumagedon: Story = {
  args: {
    currentTab: 'dorumagedon',
    hasDorumagedon: true
  },
};

export const Zeron: Story = {
  args: {
    currentTab: 'zeron',
    hasZeron: true
  },
};
