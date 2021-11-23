import React from "react";
import CustomIconButton from "../components/CustomIconButton";
import Tag from "../components/Tag";
import bulb from "../assets/hint.svg";
import cube from "../assets/cube.svg";
import blackCube from "../assets/blackCube.png";
import inkpen from "../assets/inkpen.svg";

export default {
  component: "MiscButtons",
  title: "Custom/MiscButtons",
};

export const Hint = (args) => <CustomIconButton {...args} />;

Hint.args = {
  source: bulb,
  label: "Get Hint",
  iconColor: "#FF6600",
  buttonColor: "#FFF0E6",
};

export const tag = (args) => <Tag {...args} />;

tag.args = {
  textColorUnselected: "#2B2541",
  tagColorUnselected: "#F5F5F5",
  textColorSelected: "white",
  tagColorSelected: "#FF9249",
  label: "Tag Name",
};

export const iconTag = (args) => <Tag {...args} />;

iconTag.args = {
  sourceUnselected: inkpen,
  sourceSelected: inkpen,
  textColorUnselected: "#7C788A",
  tagColorUnselected: "white",
  textColorSelected: "#7C788A",
  tagColorSelected: "white",
  label: "Tag Name",
};

export const Category = (args) => <Tag {...args} />;

Category.args = {
  textColor: "#7C788A",
  tagColor: "white",
  textColorSelected: "white",
  tagColorSelected: "#FF7112",
  label: "Tag Name",
  isCategory: true,
};

export const iconCategory = (args) => <Tag {...args} />;

iconCategory.args = {
  sourceSelected: cube,
  sourceUnselected: blackCube,
  textColorUnselected: "#7C788A",
  tagColorUnselected: "white",
  textColorSelected: "white",
  tagColorSelected: "#FF7112",
  label: "Tag Name",
  isCategory: true,
};
