import React from "react";
import "./Icon.css";
import { Image } from "@chakra-ui/react";

const Icon = (props) => {
  return (
    <div className="Icon" style={{ backgroundColor: props.color }}>
      <Image p="8px" src={props.source} boxSize="40px" alt="" />
    </div>
  );
};

export default Icon;
