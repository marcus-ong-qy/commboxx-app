import styled from 'styled-components'
import { lemonBg } from '../../pages/styles/Colours'

export const StyledMain = styled.main<{ hasFooter?: boolean }>`
  // padding-top: 3rem; /*top nav bar*/
  height: 100%;
  min-height: 100vh;
  background-color: ${lemonBg};
  /* ${(props) => props.hasFooter && 'margin-bottom: -10rem;'} */
`
