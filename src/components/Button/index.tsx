import { Styled } from './styled'
import { ButtonProps } from './types'

export const Button = ({
  children,
  shape = 'transparent',
  radius = 30,
  width = 'auto',
  height = 'auto'
}: ButtonProps) => {
  return (
    <Styled.Button shape={shape} radius={radius} width={width} height={height}>
      {children}
    </Styled.Button>
  )
}
