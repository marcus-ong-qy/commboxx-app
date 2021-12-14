import styled, { css } from 'styled-components'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { cbLemon, darkGreen } from '../../../pages/styles/Colours'

export const headerBarHeight = '73px'

export const HeaderBarStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerBarHeight};
  background: ${cbLemon};

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MenuIcon = styled(MenuOutlined)`
  position: absolute;
  margin-left: 5vw;

  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
  }

  :active {
    color: ${darkGreen};
  }
`

export const HeaderTitle = styled.h1`
  margin: 0 auto 0;
`

export const FadeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export const SideMenuDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw;
  background: ${cbLemon};
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: left;
`

export const CloseButton = styled(CloseOutlined)`
  height: 30px;
  width: 30px;
  margin: 5vw auto 7vh 5vw;

  cursor: pointer;

  svg {
    height: 30px;
    width: 30px;
  }

  :active {
    color: ${darkGreen};
  }
`

const sideBarLinkStyle = css`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;

  margin: 1vh auto 1vh 5vw;

  cursor: pointer;

  :active {
    color: ${darkGreen};
  }
`

export const SideBarLink = styled.a`
  ${sideBarLinkStyle}
`

export const SideBarWarningLink = styled.a`
  ${sideBarLinkStyle}
  margin-top: 3vh;
  color: red;
`
