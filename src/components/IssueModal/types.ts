import { ModalProps } from '../Modal/types'

export type IssueType = 'all' | 'open' | 'closed'

export type IssueModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  currentIssue: IssueType
  onClickApply: (issue: IssueType) => void
}
