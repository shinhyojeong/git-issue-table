import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledProps } from '~/types'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  shape?: 'outline' | 'solid' | 'transparent'
  radius?: number
  width?: string
  height?: string
}

export type StyledButtonProps = StyledProps<
  ButtonProps,
  'shape' | 'radius' | 'width' | 'height'
>
