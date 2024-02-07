import type { Meta, StoryObj } from "@storybook/web-components";
import { action } from "@storybook/addon-actions";
import { html } from "lit";
// import type { ButtonProps } from './Button';
import { type Tab } from "./dmTabs";
import "./dmTabs";

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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "dm-tabs",
  tags: ["autodocs"],
  render: template,
  argTypes: {
    currentTab: { type: "string" },
    // backgroundColor: { control: 'color' },
    // onClick: { action: 'onClick' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
} satisfies Meta<Params>;

export default meta;
type Story = StoryObj<Params>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    currentTab: "main",
    mainCardsLengh: 40,
    grCardsLengh: 12,
    hyperSpatialCardsLengh: 8,
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
