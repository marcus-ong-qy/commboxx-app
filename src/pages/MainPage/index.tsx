import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ItemCard from '../../components/ItemCard/ItemCard'
import { PATHS } from '../../routes/PATHS'
// eslint-disable-next-line
import { getItem } from '../../store/actions'
import { usingBackend } from '../../store/reducer'
import { ItemType, RootState } from '../../store/types'
import {
  ItemCardsDiv,
  MainPageStyled,
  PostButtonStyled,
  SearchDivStyled,
  SearchBarStyled,
} from './styles/MainPage.styled'

const SearchDiv = ({ setDisplayItems }: { setDisplayItems: React.Dispatch<React.SetStateAction<ItemType[]>> }) => {
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)

  return (
    <SearchDivStyled>
      <SearchBarStyled
        placeholder="Search"
        onChange={(e) =>
          setDisplayItems(
            commspaceItems?.filter(
              (item) =>
                item.itemName
                  .toLowerCase()
                  .search(e.target.value.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1').toLowerCase()) !== -1, // escape certain characters to prevent invalid regex error when typing such characters
            ) ?? [],
          )
        }
      />
    </SearchDivStyled>
  )
}

const PostButton = () => {
  const navigate = useNavigate()
  return <PostButtonStyled onClick={() => navigate(PATHS.LOANINGPAGE)}>Put up an item for loan </PostButtonStyled>
}

const MainPage = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)
  const [displayItems, setDisplayItems] = useState(commspaceItems) // TODO search/filter results

  useEffect(() => {
    usingBackend && dispatch(getItem())
  }, [])

  useEffect(() => {
    setDisplayItems(commspaceItems)
  }, [commspaceItems])

  return (
    <MainPageStyled>
      <SearchDiv setDisplayItems={setDisplayItems} />
      <ItemCardsDiv>
        {displayItems.map((item) => (
          <ItemCard item={item} onClick={() => navigate(`${PATHS.PRODUCT_PAGE}/${item.itemID}`)} />
        ))}
      </ItemCardsDiv>
      <PostButton />
    </MainPageStyled>
  )
}

export default MainPage
