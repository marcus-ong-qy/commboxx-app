/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Action } from 'redux'
import { rootReducer } from './store'

export type RootState = ReturnType<typeof rootReducer>

type ThunkDispatch<S, A extends Action> = {
  (action: A): A
  <R>(asyncAction: ThunkAction<R, S, A>): R
}
type ThunkAction<R, S, A extends Action> = (dispatch: ThunkDispatch<S, A>, getState: () => S) => R

export type Dispatch<CustomActionTypes extends Action> = ThunkDispatch<RootState, CustomActionTypes>
export type GetState = () => RootState

/** Types */

export type LoginCredentials = {
  userID: string
  passwordHash: string
}

export type ItemType = {
  itemID: number
  itemName: string
  userName: string
  userID: string
  description: string
  remarks: string
  photo: string
  tags?: string[]
  status: number
}

/** Actions' types */

export enum ACTIONS {
  ADD_ITEM = 'ACTIONS.ADD_ITEM',
  GET_ITEM = 'ACTIONS.GET_ITEM',
  LOGIN = 'ACTIONS.LOGIN',
  EDIT_USER = 'ACTIONS.EDIT_USER',
}

/** Actions */
export type AddItem = {
  type: typeof ACTIONS.ADD_ITEM
  commspaceItems: ItemType[]
}

export type GetItem = {
  type: typeof ACTIONS.GET_ITEM
  commspaceItems: ItemType[]
}

export type LogIn = {
  type: typeof ACTIONS.LOGIN
  loginCredentials: LoginCredentials
}

export type EditUser = {
  type: typeof ACTIONS.EDIT_USER
  loginCredentials: LoginCredentials
}

export type ActionTypes = AddItem | GetItem | LogIn | EditUser
