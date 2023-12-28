import styled from '@emotion/styled'

const Title = styled.p`
  ${({ theme }) => theme.fonts.title4B}
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  margin: 20px 0 32px;
`

export const Styled = { Title, ButtonsContainer }
