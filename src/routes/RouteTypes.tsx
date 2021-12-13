import React from 'react'

import { StyledMain } from './styles/Routes.styled'

export const RouteWithoutNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps
  return (
    <StyledMain>
      <Component />
    </StyledMain>
  )
}

export const RouteWithTopNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps
  return (
    <StyledMain>
      {/* <MainNavigation /> */}
      <Component />
    </StyledMain>
  )
}
