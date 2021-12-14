import { Dispatch, GetState, ActionTypes, ACTIONS } from './types'

export const addItem = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems } = getState().commboxx_reducer
  dispatch({
    type: ACTIONS.ADD_ITEM,
    commspaceItems: commspaceItems,
  })
}
