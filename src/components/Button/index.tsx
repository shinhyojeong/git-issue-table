import { MouseEvent } from 'react'
import { Styled } from './styled'
import { ButtonProps } from './types'

export const Button = ({
  children,
  shape = 'transparent',
  radius = 30,
  width = 'auto',
  height = 'auto',
  onClick
}: ButtonProps) => {
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
  }

  return (
    <Styled.Button
      shape={shape}
      radius={radius}
      width={width}
      height={height}
      onClick={handleClickButton}>
      {children}
    </Styled.Button>
  )
}
