import styled from 'styled-components'
import { lemonBackground } from '../../../routes/styles/Routes.styled'
import { lemonBg } from '../../styles/Colours'

export const LoadingPageStyled = styled.div`
  ${lemonBackground}

  display: row;
  justify-content: center;
  align-items: center;
`

export const LoadingText = styled.p`
  font-weight: bold;
  margin-left: 10vh;
  font-size: 24px;
`

export const CommboxxLogo = styled.img`
  margin-top: 30vh;
  margin-left: 10vh;
  width: 64vw;
  height: 64vw;
  background: ${lemonBg};
`
