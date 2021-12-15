import React from 'react'
import { ItemCardImage, ItemCardFrom, ItemCardStyled, ItemCardTitle } from './styles/ItemCard.styled'

const ItemCard = ({ image, title, from, onClick }: { image: string; title: string; from: string; onClick: any }) => {
  return (
    <ItemCardStyled onClick={onClick}>
      <ItemCardImage src={image} />
      <ItemCardTitle>{title}</ItemCardTitle>
      <ItemCardFrom>From:&nbsp;{from}</ItemCardFrom>
    </ItemCardStyled>
  )
}

export default ItemCard
