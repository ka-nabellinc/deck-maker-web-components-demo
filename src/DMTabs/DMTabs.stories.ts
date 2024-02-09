import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { expect } from '@storybook/jest'
import { html } from "lit";
import type { Tab } from './DMTabs'
import "./DMTabs"
import { withinShadowRoot } from '../test-helpers'

interface Params {
  currentTab: Tab;
  mainCardsLength: number;
  grCardsLength: number;
  hyperSpatialCardsLength: number;
  hasDorumagedon: boolean;
  hasZeron: boolean;
}

const template = ({
  currentTab,
  mainCardsLength,
  grCardsLength,
  hyperSpatialCardsLength,
  hasDorumagedon,
  hasZeron,
}: Params) => html`
  <dm-tabs
    currentTab=${currentTab}
    mainCardsLength=${mainCardsLength}
    grCardsLength=${grCardsLength}
    hyperSpatialCardsLength=${hyperSpatialCardsLength}
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
    mainCardsLength: 40,
    grCardsLength: 12,
    hyperSpatialCardsLength: 8,
  },
  argTypes: {
    currentTab: {
      control: { type: 'select' },
      options: ["main", "gr", "hyperSpatial", "dorumagedon", "zeron"],
    },
    mainCardsLength: { control: { type: 'number' } },
    grCardsLength: { control: { type: 'number' } },
    hyperSpatialCardsLength: { control: { type: 'number' } },
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
  play: async ({ canvasElement }) => {
    const root = await withinShadowRoot(canvasElement, 'dm-tabs')

    await expect(root.getByTestId('main-tab')).toBeInTheDocument()
    await expect(root.getByTestId('main-tab')).toHaveClass('active')
    await expect(root.getByTestId('gr-tab')).toBeInTheDocument()
    await expect(root.getByTestId('hyperSpatial-tab')).toBeInTheDocument()
  }
};

export const GR: Story = {
  args: {
    currentTab: "gr",
  },
  play: async ({ canvasElement }) => {
    const root = await withinShadowRoot(canvasElement, 'dm-tabs')

    await expect(root.getByTestId('main-tab')).toBeInTheDocument()
    await expect(root.getByTestId('gr-tab')).toBeInTheDocument()
    await expect(root.getByTestId('gr-tab')).toHaveClass('active')
    await expect(root.getByTestId('hyperSpatial-tab')).toBeInTheDocument()
  }
};

export const HyperSpatial: Story = {
  args: {
    currentTab: 'hyperSpatial',
  },
  play: async ({ canvasElement }) => {
    const root = await withinShadowRoot(canvasElement, 'dm-tabs')

    await expect(root.getByTestId('main-tab')).toBeInTheDocument()
    await expect(root.getByTestId('gr-tab')).toBeInTheDocument()
    await expect(root.getByTestId('hyperSpatial-tab')).toBeInTheDocument()
    await expect(root.getByTestId('hyperSpatial-tab')).toHaveClass('active')
  }
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
