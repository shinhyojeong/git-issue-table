import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { StyledContainerProps } from './types'

const DIM = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.opacity.opacity01};
    z-index: ${theme.zIndex.modal};
  `}
`

const Container = styled.div<StyledContainerProps>`
  padding: 24px 20px;
  border-radius: 16px;

  ${({ theme, width, height }) => css`
    width: ${width};
    height: ${height};

    background-color: ${theme.colors.white};
  `}
`

export const Styled = {
  DIM,
  Container
}
