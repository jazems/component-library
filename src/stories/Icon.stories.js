import React from "react";
import Icon from "../components/Icon";
import whiteBulb from "../assets/hint.svg";
import blackBulb from "../assets/bulb.png";

export default {
  component: "Icon",
  title: "Custom",
};

export const icon = (args) => <Icon {...args} />;

icon.args = {
  source: blackBulb,
  color: "#FF6600",
  circle: false,
};

export const circleIcon = (args) => <Icon {...args} />;

circleIcon.args = {
  source: whiteBulb,
  color: "#FF6600",
  circle: true,
};
