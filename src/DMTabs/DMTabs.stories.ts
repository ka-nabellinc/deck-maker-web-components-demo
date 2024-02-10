import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { expect } from '@storybook/jest'
import { html } from "lit";
import type { Tab } from './DMTabs'
import "./DMTabs"
import { withinShadowRoot, dmDeckFactory } from '../test-helpers'
import type { DMDeckData } from '../types'

interface Params {
  currentTab: Tab;
  deck: DMDeckData
}

const template = ({
  currentTab,
  deck
}: Params) => html`
  <dm-tabs
    currentTab=${currentTab}
    .deckData=${deck}
    @change=${action('onChange')}
  ></dm-tabs>
`;

const meta = {
  title: "dm-tabs",
  tags: ["autodocs"],
  render: template,
  args: {
    deck: dmDeckFactory(),
  },
  argTypes: {
    currentTab: {
      control: { type: 'select' },
      options: ["main", "gr", "hyperSpatial", "dorumagedon", "zeron"],
    },
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
    deck: dmDeckFactory({ dorumagedon: true })
  },
  play: async ({ canvasElement }) => {
    const root = await withinShadowRoot(canvasElement, 'dm-tabs')

    await expect(root.getByTestId('main-tab')).toBeInTheDocument()
    await expect(root.getByTestId('gr-tab')).toBeInTheDocument()
    await expect(root.getByTestId('hyperSpatial-tab')).toBeInTheDocument()
    await expect(root.getByTestId('dorumagedon-tab')).toBeInTheDocument()
    await expect(root.getByTestId('dorumagedon-tab')).toHaveClass('active')
  }
};

export const Zeron: Story = {
  args: {
    currentTab: 'zeron',
    deck: dmDeckFactory({ zeron: true })
  },
  play: async ({ canvasElement }) => {
    const root = await withinShadowRoot(canvasElement, 'dm-tabs')

    await expect(root.getByTestId('main-tab')).toBeInTheDocument()
    await expect(root.getByTestId('gr-tab')).toBeInTheDocument()
    await expect(root.getByTestId('hyperSpatial-tab')).toBeInTheDocument()
    await expect(root.getByTestId('zeron-tab')).toBeInTheDocument()
    await expect(root.getByTestId('zeron-tab')).toHaveClass('active')
  }
};
