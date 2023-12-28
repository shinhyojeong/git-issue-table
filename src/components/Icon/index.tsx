import { Styled } from './styled'
import { IconProps } from './types'
import 'material-icons/iconfont/material-icons.css'

export const Icon = ({ type, color = 'grayScale90', size = 18 }: IconProps) => (
  <Styled.Icon className="material-icons" color={color} size={size}>
    {type}
  </Styled.Icon>
)
