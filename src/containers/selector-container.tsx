import { Selector } from "@/components/pizza/selector";
import { SelectorCategory } from "@/types";
import React from "react";

interface SelectorContainerProps {
  data: number[];
  className: string;
  selectorCategory: SelectorCategory;
}

export const SelectorContainer: React.FC<SelectorContainerProps> = ({
  data,
  className,
  selectorCategory,
}) => {
  const [active, setActive] = React.useState(0);
  if (!data.length) {
    return null;
  }
  return (
    <ul className={className}>
      {data.map((item) => {
        return (
          <Selector
            onClick={() => setActive(item)}
            selectorCategory={selectorCategory}
            key={item}
            item={item}
            active={active}
          />
        );
      })}
    </ul>
  );
};
