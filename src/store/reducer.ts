import { Reducer } from 'redux'

import { ACTIONS, ActionTypes, ItemType } from './types'

import hairDryer from '../assets/hair-dryer.png'
import vacuumCleaner from '../assets/vacuum-cleaner.png'

const commspaceItemsData: ItemType[] = [
  {
    photo: hairDryer,
    itemID: 2645,
    itemName: 'Hair Dryer',
    userID: '0234529',
    userName: 'Lena',
    description: 'dryer for hair',
    remarks: 'yes',
    tags: ['hair dryer', 'hair', 'dryer'],
    status: 0,
  },
  {
    photo: vacuumCleaner,
    itemID: 2646,
    itemName: 'Vacuum Cleaner',
    userID: '0234530',
    userName: 'Chloe',
    description: 'cleaner that vacuums',
    remarks: 'yes',
    tags: ['vacuum', 'cleaner'],
    status: 1,
  },
  {
    photo: hairDryer,
    itemID: 2647,
    itemName: 'Hair Dryer',
    userID: '0234531',
    userName: 'Linus',
    description: 'dryer for hair',
    remarks: 'yes',
    tags: ['hair dryer', 'hair', 'dryer'],
    status: -1,
  },
  {
    photo: vacuumCleaner,
    itemID: 2648,
    itemName: 'Vacuum Cleaner',
    userID: '0234532',
    userName: 'Cleon',
    description: 'cleaner that vacuums',
    remarks: 'yes',
    tags: ['vacuum', 'cleaner'],
    status: 0,
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
