import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import {
  CloseButton,
  FadeBackground,
  HeaderBarStyled,
  HeaderTitle,
  MenuIcon,
  SideBarLink,
  SideBarWarningLink,
  SideMenuDiv,
} from './styles/HeaderBar.styled'

const SideMenu = ({ setMenuOpen }: { setMenuOpen: any }) => {
  const navigate = useNavigate()
  return (
    <>
      <FadeBackground onClick={() => setMenuOpen(false)} />
      <SideMenuDiv>
        <CloseButton onClick={() => setMenuOpen(false)} />
        <SideBarLink onClick={() => navigate(PATHS.MAIN)}>commspace</SideBarLink>
        <SideBarLink>my profile</SideBarLink>
        <SideBarLink>settings</SideBarLink>
        <SideBarWarningLink onClick={() => navigate(PATHS.LOGIN)}>log out</SideBarWarningLink>
      </SideMenuDiv>
    </>
  )
}

const HeaderBar = ({ title }: { title: string }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderBarStyled>
      <MenuIcon onClick={() => setMenuOpen(true)} />
      <HeaderTitle>{title}</HeaderTitle>
      {menuOpen && <SideMenu setMenuOpen={setMenuOpen} />}
    </HeaderBarStyled>
  )
}

export default HeaderBar
