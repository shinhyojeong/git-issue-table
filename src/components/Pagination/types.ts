export type PaginationProps = {
  /**
   * @description 총 페이지 길이
   */
  totalCount: number
  count?: number
  perPage?: number
  defaultPage?: number
  rangeCount?: number
  onChangePage?: (currentPage: number) => void
}
