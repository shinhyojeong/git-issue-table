import { MouseEvent, useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Styled } from './styled'
import { IssueModalProps, IssueType } from './types'

const buttonInfos = [
  { name: '전체', value: 'all' },
  { name: 'open', value: 'open' },
  { name: 'closed', value: 'closed' }
]

export const IssueModal = ({
  currentIssue,
  onClickApply,
  ...props
}: IssueModalProps) => {
  const [issueState, setIssueState] = useState<IssueType>('open')

  const handleChangeIssue = (e: MouseEvent<HTMLButtonElement>) => {
    const newIssue = e.currentTarget.value as IssueType

    setIssueState(newIssue)
  }

  return (
    <Modal {...props}>
      <Styled.Title>이슈 상태</Styled.Title>
      {buttonInfos.map(({ name, value }) => (
        <Button
          shape={currentIssue === value ? 'solid' : 'outline'}
          value={value}
          onClick={handleChangeIssue}>
          {name}
        </Button>
      ))}
      <Button
        shape="solid"
        width="100%"
        onClick={() => onClickApply(issueState)}>
        적용
      </Button>
    </Modal>
  )
}
