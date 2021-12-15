import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import { PATHS } from './PATHS'
import { RouteWithBackButton, RouteWithoutNav, RouteWithTopNav } from './RouteTypes'

const LoginPage = React.lazy(() => import(/* webpackChunckName: "LoginPage" */ '../pages/LoginPage'))
const RegisterPage = React.lazy(() => import(/* webpackChunckName: "RegisterPage" */ '../pages/RegisterPage'))
const ForgetPasswordPage = React.lazy(
  () => import(/* webpackChunckName: "ForgetPasswordPage" */ '../pages/ForgetPasswordPage'),
)
const MainPage = React.lazy(() => import(/* webpackChunckName: "MainPage" */ '../pages/MainPage'))
const ProfilePage = React.lazy(() => import(/* webpackChunckName: "ProfilePage" */ '../pages/ProfilePage'))
const ProductPages = React.lazy(() => import(/* webpackChunckName: "ProductPages" */ '../pages/ProductPages'))

export const Routes = () => (
  <Switch>
    <Route path={PATHS.LOGIN} element={<RouteWithoutNav component={LoginPage} />} />
    <Route path={PATHS.REGISTER} element={<RouteWithBackButton component={RegisterPage} />} />
    <Route path={PATHS.FORGET_PASSWORD} element={<RouteWithBackButton component={ForgetPasswordPage} />} />

    <Route path={PATHS.MAIN} element={<RouteWithTopNav component={MainPage} title="commspace" />} />
    <Route path={PATHS.PROFILEPAGE} element={<RouteWithTopNav component={ProfilePage} title={'Profile info'} />} />
    <Route path={`${PATHS.PRODUCT_PAGE}/:productID`} element={<RouteWithBackButton component={ProductPages} />} />
  </Switch>
)
