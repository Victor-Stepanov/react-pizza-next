"use client";
import { CategoryTab } from "@/ui/buttons/category-tab";
import React from "react";

interface CategoriesContainerProps {
  data: string[];
}

export const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  data,
}) => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  if (!data.length) {
    return null;
  }

  return (
    <>
      {data.map((category, index) => {
        return (
          <CategoryTab
            active={activeCategory === index}
            key={index}
            categoryName={category}
            onClick={() => setActiveCategory(index)}
          />
        );
      })}
    </>
  );
};
