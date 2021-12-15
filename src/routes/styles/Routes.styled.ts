import styled, { css } from 'styled-components'
import { headerBarHeight } from '../../components/HeaderBar/styles/HeaderBar.styled'
import { lemonBg } from '../../pages/styles/Colours'

export const lemonBackground = css`
  height: 100%;
  min-height: 100vh;
  background-color: ${lemonBg};
`

export const StyledMain = styled.main<{ withHeaderBar?: boolean }>`
  padding-top: ${(props) => (props.withHeaderBar ? headerBarHeight : 0)}; /*header bar*/
  overflow: scroll;
  ${lemonBackground}

  ::-webkit-scrollbar {
    display: none;
  }
`
