import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { PATHS } from '../../routes/PATHS'
import { LoginCredentials } from '../../store/types'
import { logIn, logInOffline } from '../../store/actions'
import { usingBackend } from '../../store/reducer'
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
  const dispatch = useDispatch()

  const defaultCredentials: LoginCredentials = {
    userID: '',
    passwordHash: '',
  }

  const [loginCredentials, setLoginCredentials] = useState(defaultCredentials)

  return (
    <StyledLoginPage>
      <CommboxxLogo src={commboxxLogoTransparent} />
      <LoginForm>
        <StyledInput
          placeholder="Username"
          value={loginCredentials.userID}
          onChange={(e) => setLoginCredentials({ ...loginCredentials, userID: e.target.value })}
        />
        <StyledInput
          placeholder="Password"
          value={loginCredentials.passwordHash}
          onChange={(e) => setLoginCredentials({ ...loginCredentials, passwordHash: e.target.value })}
        />
        <StyledButton
          onClick={() => {
            usingBackend ? logIn(loginCredentials) : dispatch(logInOffline(loginCredentials))
            navigate(PATHS.MAIN)
          }}
        >
          Login
        </StyledButton>
        <LinksDiv>
          <RegisterLink onClick={() => navigate(PATHS.REGISTER)}>Register</RegisterLink>
          <ForgetPwdLink onClick={() => navigate(PATHS.FORGET_PASSWORD)}>Forget Password</ForgetPwdLink>
        </LinksDiv>
      </LoginForm>
    </StyledLoginPage>
  )
}

export default LoginPage
