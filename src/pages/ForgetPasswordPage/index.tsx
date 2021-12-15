import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import {
  StyledForgetPasswordPage,
  StyledInput,
  StyledButton,
  ForgetPasswordForm,
} from './styles/ForgetPasswordPage.styled'

// import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const ForgetPasswordPage = () => {
  const navigate = useNavigate()

  return (
    <StyledForgetPasswordPage>
      <ForgetPasswordForm>
        <h1>Forget Password</h1>
        <StyledInput placeholder="Email" />
        <StyledButton onClick={() => navigate(PATHS.LOGIN)}>Reset Password</StyledButton>
      </ForgetPasswordForm>
    </StyledForgetPasswordPage>
  )
}

export default ForgetPasswordPage
