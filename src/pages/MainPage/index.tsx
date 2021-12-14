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
          <ItemCard image={item.image} title={item.title} from={item.from} />
        ))}
      </ItemCardsDiv>
      <PostButton />
    </MainPageStyled>
  )
}

export default MainPage
