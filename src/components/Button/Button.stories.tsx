import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "@darwin/Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DarwinButton: Story = (args: object) => (
  <Button type="plain" {...args}></Button>
);

DarwinButton.args = {
  type: "plain",
  children: "Done",
  size: "md",
};
