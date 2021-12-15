import { Dispatch, GetState, ActionTypes, ACTIONS, ItemType, LoginCredentials } from './types'

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

export const addItem = (newItem: ItemType) => {
  const url = 'https://backend-repo-ihh.eugenetan1.repl.co/items'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newItem),
  })
    .then((resp) => resp.json())
    .catch((err) => alert(err))
}

export const addItemOffline = (newItem: ItemType) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems } = getState().commboxx_reducer
  dispatch({
    type: ACTIONS.ADD_ITEM,
    commspaceItems: [...commspaceItems, newItem],
  })
}

export const logIn = (credentials: LoginCredentials) => {
  const url = 'https://backend-repo-ihh.eugenetan1.repl.co/auth/login'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((resp) => resp.json())
    .catch((err) => alert(err))
}

export const logInOffline =
  (credentials: LoginCredentials) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    dispatch({
      type: ACTIONS.LOGIN,
      loginCredentials: credentials,
    })
  }
