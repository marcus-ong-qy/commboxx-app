import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { StyledRegisterPage, StyledInput, StyledButton, RegisterForm } from './styles/RegisterPage.styled'

// import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <StyledRegisterPage>
      <RegisterForm>
        <h1>Register</h1>
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Username" />
        <StyledInput placeholder="Password (min. 8 characters)" />
        <StyledInput placeholder="Confirm Password" />
        <StyledButton onClick={() => navigate(PATHS.LOGIN)}>Register</StyledButton>
      </RegisterForm>
    </StyledRegisterPage>
  )
}

export default RegisterPage
