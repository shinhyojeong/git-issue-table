export type SortType = 'created' | 'updated' | 'comments'

export type SortModalProps = {
  currentSort: SortType
  onChangeSort: (sort: SortType) => void
}
