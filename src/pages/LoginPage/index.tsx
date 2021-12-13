import React from 'react'
import {
  StyledLoginPage,
  CommboxxLogo,
  StyledInput,
  StyledButton,
  RegisterLink,
  ForgetPwdLink,
} from './styles/LoginPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <CommboxxLogo src={commboxxLogoTransparent} />
      <StyledInput placeholder="Username" />
      <StyledInput placeholder="Password" />
      <StyledButton>Login</StyledButton>
      <RegisterLink>Register</RegisterLink>
      <ForgetPwdLink>Forget Password</ForgetPwdLink>
    </StyledLoginPage>
  )
}

export default LoginPage
