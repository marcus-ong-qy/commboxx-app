import { Dispatch, GetState, ActionTypes, ACTIONS, ItemType, LoginCredentials } from './types'

export const getCredentials = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const url = 'https://backend-repo-ihh.eugenetan1.repl.co/users/current'
  fetch(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then((resp) => resp.json())
    .then((data: { status: string; userID: string }) => {
      dispatch({
        type: ACTIONS.LOGIN,
        loginCredentials: { userID: data.userID, passwordHash: '' },
      })
    })
  // .catch((err) => alert(err))
}

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

export const editItem = (editItem: ItemType) => {
  const url = `https://backend-repo-ihh.eugenetan1.repl.co/items/item?itemID=${editItem.itemID}`
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(editItem),
  })
    .then((resp) => resp.json())
    .catch((err) => alert(err))
}

export const editItemOffline = (newItem: ItemType) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems } = getState().commboxx_reducer
  const commspaceItemsReplaced = commspaceItems.filter((item) => item.itemID !== newItem.itemID)

  dispatch({
    type: ACTIONS.ADD_ITEM,
    commspaceItems: [...commspaceItemsReplaced, newItem],
  })
}

export const deleteItem = (deletingItem: ItemType) => {
  const url = `https://backend-repo-ihh.eugenetan1.repl.co/items/item?itemID=${deletingItem.itemID}`
  fetch(url, {
    method: 'DELETE',
    mode: 'cors',
  })
    .then((resp) => resp.json())
    .catch((err) => alert(err))
}

export const deleteItemOffline = (deletingItem: ItemType) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems } = getState().commboxx_reducer
  const commspaceItemsDeleted = commspaceItems.filter((item) => item.itemID !== deletingItem.itemID)

  dispatch({
    type: ACTIONS.ADD_ITEM,
    commspaceItems: commspaceItemsDeleted,
  })
}

export const logIn = (credentials: LoginCredentials) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
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
    .then(() => {
      dispatch({
        type: ACTIONS.LOGIN,
        loginCredentials: { ...credentials },
      })
    })
    .catch((err) => alert(err))
}

export const logInOffline =
  (credentials: LoginCredentials) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    dispatch({
      type: ACTIONS.LOGIN,
      loginCredentials: { ...credentials },
    })
  }

// not fully implemented
export const editUsernameOffline = (newUserID: string) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { commspaceItems, loginCredentials } = getState().commboxx_reducer
  const oldUserName = loginCredentials.userID

  commspaceItems.map((item) => {
    if (item.userName === oldUserName) {
      item.userName = newUserID
    }
    return 0
  })

  dispatch({
    type: ACTIONS.EDIT_USER,
    loginCredentials: { ...loginCredentials, userID: newUserID },
  })
}
