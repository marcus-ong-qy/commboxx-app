import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import { PATHS } from './PATHS'
import { RouteWithoutNav, RouteWithTopNav } from './RouteTypes'

const LoginPage = React.lazy(() => import(/* webpackChunckName: "LoginPage" */ '../pages/LoginPage'))

export const Routes = () => (
  <Switch>
    {/* pages with both top and bottom nav */}
    <Route path="/" element={<RouteWithoutNav component={LoginPage} />} />
  </Switch>
)
