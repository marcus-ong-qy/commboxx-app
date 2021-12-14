import React from 'react'
import { ItemCardImage, ItemCardFrom, ItemCardStyled, ItemCardTitle } from './styles/ItemCard.styled'

const ItemCard = ({ image, title, from }: { image: string; title: string; from: string }) => {
  return (
    <ItemCardStyled>
      <ItemCardImage src={image} />
      <ItemCardTitle>{title}</ItemCardTitle>
      <ItemCardFrom>From:&nbsp;{from}</ItemCardFrom>
    </ItemCardStyled>
  )
}

export default ItemCard
