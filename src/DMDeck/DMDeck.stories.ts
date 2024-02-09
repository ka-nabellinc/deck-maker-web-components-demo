import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import './DMDeck'

interface Params {
  dmDeckId: string
}

const template = ({ dmDeckId }: Params) => html`
  <dm-deck dmDeckId="${dmDeckId}"></dm-deck>
`;

const meta = {
  title: "dm-deck",
  tags: ["autodocs"],
  render: template,
  argTypes: {},
} satisfies Meta<Params>;

export default meta;
type Story = StoryObj<Params>;

export const Default: Story = {
  args: {
    dmDeckId: '7d3c6dd0-163c-438e-937c-de742098d9c2'
  }
};

export const Dorumagedon: Story = {
  args: {
    dmDeckId: '20eb626b-bab0-47bb-8379-fde4373217a6'
  }
}

export const Zeron: Story = {
  args: {
    dmDeckId: '6463d214-c002-45ac-99a4-a685bd4d7955'
  }
}