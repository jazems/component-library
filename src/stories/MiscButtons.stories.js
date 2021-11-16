import React from "react";
import CustomIconButton from "../components/CustomIconButton";

export default {
  component: "MiscButtons",
  title: "Custom/MiscButtons",
};

export const Hint = (args) => <CustomIconButton {...args} />;

Hint.args = {
  source: "https://svgur.com/i/c4J.svg",
  label: "Get Hint",
  iconColor: "#FF6600",
  buttonColor: "#FFF0E6",
};
