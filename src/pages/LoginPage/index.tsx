import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import {
  StyledLoginPage,
  CommboxxLogo,
  StyledInput,
  StyledButton,
  RegisterLink,
  ForgetPwdLink,
  LoginForm,
  LinksDiv,
} from './styles/LoginPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <StyledLoginPage>
      <CommboxxLogo src={commboxxLogoTransparent} />
      <LoginForm>
        <StyledInput placeholder="Username" />
        <StyledInput placeholder="Password" />
        <StyledButton onClick={() => navigate(PATHS.MAIN)}>Login</StyledButton>
        <LinksDiv>
          <RegisterLink onClick={() => navigate(PATHS.REGISTER)}>Register</RegisterLink>
          <ForgetPwdLink onClick={() => navigate(PATHS.FORGET_PASSWORD)}>Forget Password</ForgetPwdLink>
        </LinksDiv>
      </LoginForm>
    </StyledLoginPage>
  )
}

export default LoginPage
