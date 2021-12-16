import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeaderBar from '../components/HeaderBar/HeaderBar'
import { getCredentials } from '../store/actions'
import { BackButton, StyledMain } from './styles/Routes.styled'

export const RouteWithoutNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCredentials())
  // }, [])

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

export const RouteWithBackButton = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const navigate = useNavigate()
  const { component: Component } = routeProps

  return (
    <StyledMain>
      <BackButton onClick={() => navigate(-1)} />
      <Component />
    </StyledMain>
  )
}
