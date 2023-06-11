import InputField, { InputFieldProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "@darwin/InputField",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const DarwinInput: Story = (args: InputFieldProps) => (
  <InputField {...args} />
);

DarwinInput.args = {
  type: "search",
  placeholder: "Search",
};
