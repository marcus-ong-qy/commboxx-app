import React from 'react'
import {
  AccountDetails,
  AccountStyle,
  ImageBox,
  InputStyle,
  InputStyled,
  MainProfileBox,
  StyledButton,
  StyledProfilePage,
} from './styles/ProfilePage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/PATHS'

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <StyledProfilePage>
      <MainProfileBox>
        <ImageBox src={commboxxLogoTransparent}></ImageBox>
        <AccountDetails>
          <AccountStyle>Account</AccountStyle>
          <InputStyle>Username</InputStyle>
          <InputStyled size="large" placeholder="name" />
          <InputStyle>Room Number</InputStyle>
          <InputStyled placeholder="room number" />
          <InputStyle>Telegram Handle</InputStyle>
          <InputStyled placeholder="tele handle" />
          <StyledButton onClick={() => navigate(PATHS.MAIN)}>Cancel</StyledButton>
        </AccountDetails>
      </MainProfileBox>
    </StyledProfilePage>
  )
}

export default ProfilePage
