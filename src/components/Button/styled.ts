import { StyledButtonProps } from './types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;

  cursor: pointer;

  ${({ radius, width, height }) => css`
    border-radius: ${radius}px;
    width: ${width};
    height: ${height};
  `};

  ${({ theme, shape }) => {
    switch (shape) {
      case 'outline':
        return css`
          border: 1px solid ${theme.colors.grayScale20};
          background-color: ${theme.colors.white};
          color: ${theme.colors.grayScale80};
        `
      case 'solid':
        return css`
          border: none;
          background-color: ${theme.colors.blue40};
          color: ${theme.colors.white};
        `
      case 'transparent':
      default:
        return css`
          background-color: transparent;
          border: none;
        `
    }
  }}
`

export const Styled = {
  Button
}
