import { ReactNode } from 'react'

export type ModalProps = {
  width?: string
  height?: string
  isOpen?: boolean
  children: ReactNode
  onClose?: () => void
}

export type StyledContainerProps = Required<
  Pick<ModalProps, 'width' | 'height'>
>
