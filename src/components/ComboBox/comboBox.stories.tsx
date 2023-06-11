import ComboBox, { ComboBoxProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: "@darwin/ComboBox",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const DarwinComboBox: Story = (args: ComboBoxProps) => (
  <ComboBox {...args} />
);

DarwinComboBox.args = {
  nullable: false,
  placeholder: "Pick an option",
};
