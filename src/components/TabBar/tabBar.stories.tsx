import TabBar, { Tab, TabBarProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { FiSettings, FiBookmark, FiShare, FiPlay } from "react-icons/fi";

const meta: Meta<typeof TabBar> = {
  component: TabBar,
  title: "@darwin/TabBar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const DarwinTabBar: Story = (args: TabBarProps) => <TabBar {...args} />;

const tabs: Array<Tab> = [
  {
    icon: <FiSettings />,
    label: "Settings",
  },
  {
    icon: <FiBookmark />,
    label: "Bookmark",
  },
  {
    icon: <FiShare />,
    label: "Share",
  },
  {
    icon: <FiPlay />,
    label: "Play",
  },
];

DarwinTabBar.args = {
  tabs: tabs,
};
