import React from 'react'
import { useSelector } from 'react-redux'

import ItemCard from '../../components/ItemCard/ItemCard'
import { RootState } from '../../store/types'
import { ItemCardsDiv, MainPageStyled, PostButtonStyled, PostButtonLabel } from './styles/MainPage.styled'

const PostButton = () => {
  return (
    <PostButtonStyled>
      <PostButtonLabel>Put up an item for loan</PostButtonLabel>
    </PostButtonStyled>
  )
}

const MainPage = () => {
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)
  return (
    <MainPageStyled>
      <ItemCardsDiv>
        {commspaceItems.map((item) => (
          <ItemCard image={item.photo} title={item.itemName} from={item.userName} />
        ))}
      </ItemCardsDiv>
      <PostButton />
    </MainPageStyled>
  )
}

export default MainPage
