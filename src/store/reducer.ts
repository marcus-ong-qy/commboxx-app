import { Reducer } from 'redux'

import { ActionTypes } from './types'

const initialState: State = {
  number: 3,
}

type State = {
  number: number
}

export const commboxx_reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
