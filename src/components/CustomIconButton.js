import Icon from "./Icon";
import React, { useState } from "react";
import { Button, HStack, Box } from "@chakra-ui/react";

const IconButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  const neutral = (
    <Button
      p="0"
      m="0"
      borderRadius="20px"
      backgroundColor={props.buttonColor}
      onClick={handleClick}
      isActive={true}
    >
      <Icon circle={true} source={props.source} color={props.iconColor} />{" "}
    </Button>
  );

  const clicked = (
    <Button
      p="0"
      pr="20px"
      m="0"
      borderRadius="20px"
      backgroundColor={props.buttonColor}
      onClick={handleClick}
      isActive={true}
      _active={{
        bg: props.buttonColor,
      }}
      _hover={{
        color: props.iconColor,
      }}
    >
      <HStack spacing="20px">
        <Icon circle={true} source={props.source} color={props.iconColor} />
        <Box>{props.label}</Box>
      </HStack>
    </Button>
  );

  return (
    <>
      {!isClicked && neutral}
      {isClicked && clicked}
    </>
  );
};

export default IconButton;
