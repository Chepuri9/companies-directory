import type { SortType } from "../enums/sortType";

export interface FilterOptions {
  searchTerm: string;
  industry: string;
  location: string;
  sort: SortType | string;
}
