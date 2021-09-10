export type Rating = {
  rate: number;
  count: number;
};

export type SortByValue = "asc" | "desc";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface IProductConfig {
  limit: number;
  sort: SortByValue;
}
