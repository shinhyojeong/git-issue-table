import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`

const NumberButtonWrapper = styled.button<{ isSelected: boolean }>`
  width: 36px;
  height: 36px;

  border: none;
  background-color: transparent;
  border-radius: 100%;

  cursor: pointer;

  ${({ theme, isSelected }) => css`
    color: ${theme.colors.grayScale80};

    ${theme.fonts.title2B}

    ${isSelected &&
    css`
      color: ${theme.colors.grayScale90};
      background-color: ${theme.colors.grayScale20};
    `}
  `}
`

export const Styled = { Container, IconButtonWrapper, NumberButtonWrapper }
