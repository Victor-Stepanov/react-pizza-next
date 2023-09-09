import React from "react";
import { Button, ButtonProps } from "../button";
import cn from "classnames";

interface ButtonWithSvgProps extends ButtonProps {
  Icon: React.ComponentType;
}

export const ButtonWithSvg: React.FC<ButtonWithSvgProps> = ({
  className,
  Icon,
  viewVariant,
  ...rest
}) => {
  return (
    <Button viewVariant={viewVariant} className={cn(className)} {...rest}>
      <Icon />
    </Button>
  );
};
