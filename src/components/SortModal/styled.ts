import styled from '@emotion/styled'

const Title = styled.p`
  ${({ theme }) => theme.fonts.title4B}
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;

  width: 100%;
`

export const Styled = {
  Title,
  ButtonsContainer,
  ButtonWrapper
}
