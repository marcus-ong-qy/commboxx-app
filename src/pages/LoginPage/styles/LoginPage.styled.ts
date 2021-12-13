import { Button, Input } from 'antd'
import styled from 'styled-components'
import { darkGreen, lemonBg } from '../../styles/Colours'

export const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CommboxxLogo = styled.img`
  margin-top: 6.5vh;
  margin-bottom: 8vh;
  width: 64vw;
  height: 64vw;
  background: ${lemonBg};
`

export const StyledInput = styled(Input)`
  height: 35px;
  width: 84vw;
  margin-bottom: 2vh;
`

export const StyledButton = styled(Button)`
  height: 35px;
  width: 84vw;
  background: ${darkGreen};

  color: white;
  font-weight: bold;
`

export const RegisterLink = styled.a``

export const ForgetPwdLink = styled.a``
