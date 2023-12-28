import { Button } from '../Button'
import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { Styled } from './styled'
import { SortModalProps, SortType } from './types'

const sortInfos: { name: string; value: SortType }[] = [
  {
    name: '작성일 순',
    value: 'created'
  },
  {
    name: '수정일 순',
    value: 'updated'
  },
  {
    name: '코멘트 순',
    value: 'comments'
  }
]

export const SortModal = ({
  currentSort,
  onChangeSort,
  ...props
}: SortModalProps) => {
  const handleChangeSort = (value: SortType) => {
    onChangeSort(value)
  }

  return (
    <Modal {...props}>
      <Styled.Title>정렬</Styled.Title>
      <Styled.ButtonsContainer>
        {sortInfos.map(({ name, value }) => (
          <Styled.ButtonWrapper>
            <Button value={value} onClick={() => handleChangeSort(value)}>
              {name}
            </Button>
            {value === currentSort && <Icon type="check" color="blue40" />}
          </Styled.ButtonWrapper>
        ))}
      </Styled.ButtonsContainer>
    </Modal>
  )
}
