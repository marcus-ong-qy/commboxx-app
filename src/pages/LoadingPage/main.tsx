import React from 'react'
import { CommboxxLogo, LoadingPageStyled, LoadingText } from './styles/LoadingPage.styled'
import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const LoadingPage = () => {
  return (
    <LoadingPageStyled>
      <CommboxxLogo src={commboxxLogoTransparent} />
      <LoadingText>loading...</LoadingText>
    </LoadingPageStyled>
  )
}

export default LoadingPage
