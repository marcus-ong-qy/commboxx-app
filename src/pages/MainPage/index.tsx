// eslint-disable-next-line
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ItemCard from '../../components/ItemCard/ItemCard'
import { PATHS } from '../../routes/PATHS'
// eslint-disable-next-line
import { getItem } from '../../store/actions'
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
  // eslint-disable-next-line
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)

  // // uncomment if backend used
  // useEffect(() => {
  //   dispatch(getItem())
  // }, [])

  return (
    <MainPageStyled>
      <ItemCardsDiv>
        {commspaceItems.map((item) => (
          <ItemCard
            image={item.photo}
            title={item.itemName}
            from={item.userName}
            onClick={() => navigate(`${PATHS.PRODUCT_PAGE}/${item.itemID}`)}
          />
        ))}
      </ItemCardsDiv>
      <PostButton />
    </MainPageStyled>
  )
}

export default MainPage
