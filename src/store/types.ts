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

export type ItemType = {
  itemID: number
  itemName: string
  userName: string
  userID: number
  description: string
  remarks: string
  photo: string
}

/** Actions' types */
export enum ACTIONS {
  ADD_ITEM = 'ACTIONS.ADD_ITEM',
}

/** Actions */
export type AddItem = {
  type: typeof ACTIONS.ADD_ITEM
  commspaceItems: ItemType[]
}

export type ActionTypes = AddItem
