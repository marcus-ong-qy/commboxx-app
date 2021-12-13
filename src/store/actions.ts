import { Dispatch, GetState, ActionTypes, ACTIONS } from './types'

export const setThree = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  dispatch({
    type: ACTIONS.THREE,
    number: 3,
  })
}
