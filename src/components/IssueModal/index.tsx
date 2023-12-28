import { useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Styled } from './styled'
import { IssueModalProps, IssueType } from './types'

const buttonInfos: { name: string; value: IssueType }[] = [
  { name: '전체', value: 'all' },
  { name: 'open', value: 'open' },
  { name: 'closed', value: 'close' }
]

export const IssueModal = ({
  currentIssue,
  onClickApply,
  ...props
}: IssueModalProps) => {
  const [issueState, setIssueState] = useState<IssueType>(currentIssue)

  const handleChangeIssue = (value: IssueType) => {
    setIssueState(value)
    console.log('value: ', value)
  }

  return (
    <Modal {...props}>
      <Styled.Title>이슈 상태</Styled.Title>
      <Styled.ButtonsContainer>
        {buttonInfos.map(({ name, value }) => (
          <Button
            shape={issueState === value ? 'solid' : 'outline'}
            value={value}
            onClick={() => handleChangeIssue(value)}>
            {name}
          </Button>
        ))}
      </Styled.ButtonsContainer>
      <Button
        shape="solid"
        width="100%"
        onClick={() => onClickApply(issueState)}>
        적용
      </Button>
    </Modal>
  )
}
