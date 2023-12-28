import styled from '@emotion/styled'
import { StyledTHeaderProps } from './types'
import { css } from '@emotion/react'

const Table = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;
`

const Headers = styled.tr`
  background-color: ${({ theme }) => theme.colors.grayScale10};
`

const THeader = styled.th<StyledTHeaderProps>`
  padding: 6px 10px;

  ${({ theme, textAlign }) => css`
    color: ${theme.colors.grayScale70};
    text-align: ${textAlign};

    ${theme.fonts.content1R};
  `}

  :first-of-type {
    padding-left: 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  :last-of-type {
    padding-right: 12px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const TData = styled.td<StyledTHeaderProps>`
  padding: 8px 10px;

  ${({ theme, textAlign }) => css`
    color: ${theme.colors.grayScale70};
    text-align: ${textAlign};

    ${theme.fonts.content1R}
  `}

  :first-of-type {
    padding-left: 12px;
  }

  :last-of-type {
    padding-right: 12px;
  }
`

export const Styled = {
  Table,
  Headers,
  THeader,
  TData
}
