interface PaginationResult<T> {
  items: T[];
  currentPage: number;
  nextPage: boolean;
}

export function paginate<T>(
  array: T[],
  pageNumber: number,
  itemsPerPage: number
): PaginationResult<T> {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = array.slice(startIndex, endIndex);
  const nextPage = endIndex < array.length;

  return {
    items: paginatedData,
    currentPage: pageNumber,
    nextPage,
  };
}
