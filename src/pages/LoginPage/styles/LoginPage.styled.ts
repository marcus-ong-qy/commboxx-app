import styled, { css } from 'styled-components'
import { Button, Input } from 'antd'
import { darkGreen, lemonBg, linkHighlight } from '../../styles/Colours'

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

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const LinksDiv = styled.div`
  width: 95%;
  margin-top: 15.5vh; // TODO margin-top auto doesn't work

  display: flex;
  flex-direction: row;
`

const StyledLink = css`
  color: black;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  :active {
    color: ${linkHighlight};
  }
`

export const RegisterLink = styled.a`
  ${StyledLink}
  margin-top: auto;
`

export const ForgetPwdLink = styled.a`
  ${StyledLink}
  width: 21vw;
  margin-left: auto;
  text-align: right;
`
