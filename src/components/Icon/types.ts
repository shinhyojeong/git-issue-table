import { ColorKeys } from '~/theme/colors'
import { StyledProps } from '~/types'

export type IconProps = {
  type: string
  color?: ColorKeys
  size?: number
}

export type StyledIconProps = StyledProps<IconProps, 'color' | 'size'>
