export enum SortType {
  ASC = "ASC",
  DESC = "DESC",
  RELEVANCE = "RELEVANCE",
}

export const SortTypeDisplay: Record<SortType, string> = {
  [SortType.ASC]: "Ascending",
  [SortType.DESC]: "Descending",
  [SortType.RELEVANCE]: "Relevance",
};
