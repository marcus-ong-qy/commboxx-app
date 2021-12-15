import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ItemCard from '../../components/ItemCard/ItemCard'
import { PATHS } from '../../routes/PATHS'
import { RootState } from '../../store/types'
import { ItemCardsDiv, MainPageStyled, PostButtonStyled } from './styles/MainPage.styled'

const PostButton = () => {
  const navigate = useNavigate()
  return <PostButtonStyled onClick={() => navigate(PATHS.LOANINGPAGE)}>Put up an item for loan </PostButtonStyled>
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
