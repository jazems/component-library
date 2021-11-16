import React from "react";
import Icon from "../components/Icon";

export default {
  component: "Icon",
  title: "Custom",
};

export const icon = (args) => <Icon {...args} />;

icon.args = {
  source: "https://svgur.com/i/c4J.svg",
  color: "#FF6600",
};
