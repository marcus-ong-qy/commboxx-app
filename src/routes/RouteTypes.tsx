import React from 'react'
import HeaderBar from '../components/HeaderBar/HeaderBar'

import { StyledMain } from './styles/Routes.styled'

export const RouteWithoutNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps
  return (
    <StyledMain>
      <Component />
    </StyledMain>
  )
}

export const RouteWithTopNav = (routeProps: {
  component: React.LazyExoticComponent<() => JSX.Element>
  title: string
}) => {
  const { component: Component, title } = routeProps
  return (
    <StyledMain withHeaderBar>
      <HeaderBar title={title} />
      <Component />
    </StyledMain>
  )
}
