import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  component: Button,
  title: "Chakra/Button",
};

export const Template = (args) => <Button {...args}>Click me!</Button>;

export const Primary = Template.bind({});
Primary.args = { bg: "primary.orange", color: "white" };

export const PrimaryWide = Template.bind({});
PrimaryWide.args = { ...Primary.args, px: "4em" };
