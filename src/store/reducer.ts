import { Reducer } from 'redux'

import { ACTIONS, ActionTypes, ItemType } from './types'

import hairDryer from '../assets/hair-dryer.png'
import vacuumCleaner from '../assets/vacuum-cleaner.png'

const commspaceItemsData: ItemType[] = [
  {
    photo: hairDryer,
    itemID: 2645,
    itemName: 'Hair Dryer',
    userID: 1329,
    userName: 'Lena',
    description: 'dryer for hair',
    remarks: 'yes',
  },
  {
    photo: vacuumCleaner,
    itemID: 2646,
    itemName: 'Vacuum Cleaner',
    userID: 26103,
    userName: 'Chloe',
    description: 'cleaner that vacuums',
    remarks: 'yes',
  },
  {
    photo: hairDryer,
    itemID: 2647,
    itemName: 'Hair Dryer',
    userID: 11225,
    userName: 'Linus',
    description: 'dryer for hair',
    remarks: 'yes',
  },
  {
    photo: vacuumCleaner,
    itemID: 2648,
    itemName: 'Vacuum Cleaner',
    userID: 21302,
    userName: 'Cleon',
    description: 'cleaner that vacuums',
    remarks: 'yes',
  },
]

const initialState: State = {
  commspaceItems: commspaceItemsData,
}

type State = {
  commspaceItems: ItemType[]
}

export const commboxx_reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ITEM:
      return { ...state, commspaceItems: action.commspaceItems }
    case ACTIONS.ADD_ITEM:
      return { ...state, commspaceItems: action.commspaceItems }
    default:
      return state
  }
}
