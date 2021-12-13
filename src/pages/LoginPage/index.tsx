import React from 'react';
import { StyledLoginPage, CommboxxLogo } from './styles/LoginPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <CommboxxLogo src={commboxxLogoTransparent} />
    </StyledLoginPage>
  );
}

export default LoginPage;
