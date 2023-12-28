import styled from '@emotion/styled'
import { StyledIconProps } from './types'
import { css } from '@emotion/react'

const Icon = styled.span<StyledIconProps>`
  ${({ theme, color, size }) => css`
    font-size: ${size}px;
    color: ${theme.colors[color]};
  `};
`

export const Styled = { Icon }
