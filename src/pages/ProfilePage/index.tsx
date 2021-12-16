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
import { useDispatch, useSelector } from 'react-redux'

import { PATHS } from '../../routes/PATHS'
import { RootState } from '../../store/types'
import { editUsernameOffline } from '../../store/actions'

const ProfilePage = () => {
  const { loginCredentials } = useSelector((state: RootState) => state.commboxx_reducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <StyledProfilePage>
      <MainProfileBox>
        <ImageBox src={commboxxLogoTransparent}></ImageBox>
        <AccountDetails>
          <AccountStyle>@{loginCredentials.userID}</AccountStyle>
          <InputStyle>Username</InputStyle>
          <InputStyled
            size="large"
            placeholder="name"
            value={loginCredentials.userID}
            onChange={(e) => dispatch(editUsernameOffline(e.target.value))}
          />
          <InputStyle>Room Number</InputStyle>
          <InputStyled placeholder="room number" />
          <InputStyle>Telegram Handle</InputStyle>
          <InputStyled placeholder="tele handle" />
          <StyledButton onClick={() => navigate(PATHS.MAIN)}>Back</StyledButton>
        </AccountDetails>
      </MainProfileBox>
    </StyledProfilePage>
  )
}

export default ProfilePage
