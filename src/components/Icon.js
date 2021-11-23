import React from "react";
import "../styles/Icon.css";
import { Image } from "@chakra-ui/react";

const Icon = ({ color, source, circle }) => {
  return (
    <>
      {!circle && (
        <div>
          <Image p="8px" src={source} boxSize="35px" alt="" />
        </div>
      )}
      {circle && (
        <div className="Icon" style={{ backgroundColor: color }}>
          <Image p="8px" src={source} boxSize="40px" alt="" />
        </div>
      )}
    </>
  );
};

export default Icon;
