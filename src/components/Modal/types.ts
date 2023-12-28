import { ReactNode } from 'react'
import { StyledProps } from '~/types'

export type ModalProps = {
  width?: string
  height?: string
  isOpen?: boolean
  children: ReactNode
  onClose?: () => void
}

export type StyledContainerProps = StyledProps<ModalProps, 'width' | 'height'>
