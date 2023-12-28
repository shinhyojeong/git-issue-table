import { ModalProps } from '../Modal/types'

export type IssueType = 'all' | 'open' | 'close'

export type IssueModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  currentIssue: IssueType
  onClickApply: (issue: IssueType) => void
}
