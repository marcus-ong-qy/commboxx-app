import { Reducer } from 'redux'

import { ACTIONS, ActionTypes, ItemType } from './types'

import hairDryer from '../assets/hair-dryer.png'
import vacuumCleaner from '../assets/vacuum-cleaner.png'

const commspaceItemsData: ItemType[] = [
  {
    image: hairDryer,
    title: 'Hair Dryer',
    from: 'Lena',
  },
  {
    image: vacuumCleaner,
    title: 'Vacuum Cleaner',
    from: 'Chloe',
  },
  {
    image: hairDryer,
    title: 'Hair Dryer',
    from: 'Linus',
  },
  {
    image: vacuumCleaner,
    title: 'Vacuum Cleaner',
    from: 'Cleon',
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
    case ACTIONS.ADD_ITEM:
      return { ...state, commspaceItems: action.commspaceItems }
    default:
      return state
  }
}
