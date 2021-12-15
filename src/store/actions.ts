import { Dispatch, GetState, ActionTypes, ACTIONS } from './types'

export const getItem = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const url = 'https://backend-repo-ihh.eugenetan1.repl.co/items'
  fetch(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: ACTIONS.GET_ITEM,
        commspaceItems: data.data,
      })
    })
    .catch((err) => alert(err))
}

export const addItem = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems } = getState().commboxx_reducer
  dispatch({
    type: ACTIONS.ADD_ITEM,
    commspaceItems: commspaceItems,
  })
}
