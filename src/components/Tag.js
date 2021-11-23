import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import Icon from "./Icon";

const Tag = ({
  label,
  textColorUnselected,
  textColorSelected,
  tagColorSelected,
  tagColorUnselected,
  sourceSelected,
  sourceUnselected,
  isCategory,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      {!selected && sourceUnselected && (
        <IconButton
          aria-label=""
          borderRadius="20px"
          isActive={true}
          _active={{
            bg: tagColorUnselected,
          }}
          icon={<Icon circle={false} source={sourceUnselected} />}
          onClick={handleClick}
        />
      )}
      {!selected && !sourceUnselected && (
        <Button
          leftIcon={
            sourceUnselected ? <Icon circle={false} source={sourceUnselected} /> : undefined
          }
          isActive={true}
          borderRadius="20px"
          color={textColorUnselected}
          bg={tagColorUnselected}
          onClick={handleClick}
          _active={{
            bg: tagColorUnselected,
          }}
          pl={isCategory ? "25px" : undefined}
          pr={isCategory ? "25px" : undefined}
        >
          {!sourceUnselected ? label : undefined}
        </Button>
      )}
      {selected && (
        <Button
          leftIcon={sourceSelected ? <Icon circle={false} source={sourceSelected} /> : undefined}
          isActive={true}
          borderRadius="20px"
          color={textColorSelected}
          bg={tagColorSelected}
          onClick={handleClick}
          _active={{
            bg: tagColorSelected,
          }}
          pl={isCategory ? "25px" : undefined}
          pr={isCategory ? "25px" : undefined}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default Tag;
