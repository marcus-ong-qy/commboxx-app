import React from 'react'
import {
  AccountDetails,
  ImageBox,
  InputStyled,
  InputStyledDetail,
  MainProfileBox,
  StyledButton,
  StyledProfilePage,
} from './styles/LoaningPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/PATHS'
import { Input } from 'antd'

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <StyledProfilePage>
      <MainProfileBox>
        <ImageBox src={commboxxLogoTransparent}></ImageBox>
        <AccountDetails>
          <InputStyled placeholder="Item name" />
          <InputStyledDetail placeholder="Description" rows={4} />
          <InputStyledDetail placeholder="Remarks" rows={4} />
        </AccountDetails>
        <StyledButton onClick={() => navigate(PATHS.MAIN)}>Post</StyledButton>
      </MainProfileBox>
    </StyledProfilePage>
  )
}

export default ProfilePage
