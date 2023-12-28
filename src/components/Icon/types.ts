import { ColorKeys } from '~/theme/colors'

export type IconProps = {
  type: string
  color?: ColorKeys
  size?: number
}

export type StyledIconProps = Required<Pick<IconProps, 'color' | 'size'>>
