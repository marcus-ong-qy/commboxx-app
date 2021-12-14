import styled from 'styled-components'
import { lemonBackground } from '../../../routes/styles/Routes.styled'

export const LoadingPageStyled = styled.div`
  ${lemonBackground}

  display: flex;
  justify-content: center;
`

export const LoadingText = styled.p`
  margin-top: 40vh;
  font-weight: bold;
  font-size: 48px;
`
