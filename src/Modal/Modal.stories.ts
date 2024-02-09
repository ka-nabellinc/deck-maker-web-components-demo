import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";
import "./Modal";

const template = () => html`
  <dk-modal showModal @hide=${action('hide')}>
    <img
      src="https://storage.googleapis.com/ka-nabell-card-images/img/card/card100275315_1.jpg"
    />
  </dk-modal>
`;

const meta = {
  title: "dk-modal",
  tags: ["autodocs"],
  render: template,
  argTypes: {},
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {};
