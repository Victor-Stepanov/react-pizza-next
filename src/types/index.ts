export interface IPizza {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export enum SelectorCategory {
  Types = "types",
  Size = "size",
}
