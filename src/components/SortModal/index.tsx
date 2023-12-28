import { Button } from '../Button'
import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { Styled } from './styled'
import { SortModalProps, SortType } from './types'
import { MouseEventHandler } from 'react'

const sortInfos = [
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
    value: '수정일 순'
  }
]

export const SortModal = ({ currentSort, onChangeSort }: SortModalProps) => {
  const handleChangeSort: MouseEventHandler<HTMLButtonElement> = e => {
    const value = e.currentTarget.value as SortType

    onChangeSort(value)
  }

  return (
    <Modal>
      <Styled.ButtonsContainer>
        {sortInfos.map(({ name, value }) => (
          <Styled.ButtonWrapper>
            <Button value={value} onClick={handleChangeSort}>
              {name}
            </Button>
            {value === currentSort && <Icon type="check" color="blue40" />}
          </Styled.ButtonWrapper>
        ))}
      </Styled.ButtonsContainer>
    </Modal>
  )
}
