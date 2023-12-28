import { ModalProps } from '../Modal/types'

export type SortType = 'created' | 'updated' | 'comments'

export type SortModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  currentSort: SortType
  onChangeSort: (sort: SortType) => void
}
