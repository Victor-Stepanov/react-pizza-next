"use client";
import { ButtonWithSvg } from "@/ui/buttons/button-with-svg";
import { SearchIcon } from "@/ui/icons/search/search-icon";
import { Input } from "@/ui/input";
import React from "react";
import styles from "./styles.module.scss";

interface SearchProps {
  placeholderValue: string;
}

export const Search: React.FC<SearchProps> = ({ placeholderValue }) => {
  const [value, setValue] = React.useState<string>(() => "");
  return (
    <form className={styles.root} onSubmit={(evt) => evt.preventDefault()}>
      <ButtonWithSvg
        className={styles.button}
        viewVariant="inline"
        Icon={SearchIcon}
      />
      <Input
        placeholder={placeholderValue}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </form>
  );
};
