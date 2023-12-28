import { Styled } from './styled'
import { ModalProps } from './types'
import { MouseEvent } from 'react'

export const Modal = ({
  width = '390px',
  height = 'auto',
  children,
  isOpen,
  onClose
}: ModalProps) => {
  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    onClose?.()
  }

  return (
    <>
      {isOpen && (
        <Styled.DIM onClick={handleCloseModal}>
          <Styled.Container width={width} height={height}>
            {children}
          </Styled.Container>
        </Styled.DIM>
      )}
    </>
  )
}
