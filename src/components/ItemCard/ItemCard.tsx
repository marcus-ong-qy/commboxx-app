import React from 'react'
import { ItemType } from '../../store/types'
import {
  ItemCardImage,
  ItemCardFrom,
  ItemCardStyled,
  ItemCardTitle,
  ItemCardTags,
  ItemCardTagsDiv,
  ItemCardStatusDiv,
  StatusTag,
} from './styles/ItemCard.styled'

const ItemCard = ({ item, onClick }: { item: ItemType; onClick: any }) => {
  const displayStatusTag = (code: number) => {
    switch (code) {
      case 0:
        return <StatusTag bg="green">Available</StatusTag>
      case 1:
        return <StatusTag bg="orange">On Hold</StatusTag>
      default:
        return <StatusTag bg="red">On Loan</StatusTag>
    }
  }

  return (
    <ItemCardStyled onClick={onClick}>
      <ItemCardImage src={item.photo} />
      <ItemCardTitle>{item.itemName}</ItemCardTitle>
      <ItemCardFrom>From:&nbsp;{item.userName}</ItemCardFrom>
      <ItemCardTagsDiv>
        Tags:&nbsp;
        {item.tags.map((tag) => (
          <ItemCardTags>
            {tag}
            ,&nbsp;
          </ItemCardTags>
        ))}
      </ItemCardTagsDiv>
      <ItemCardStatusDiv>Status: {displayStatusTag(item.status)}</ItemCardStatusDiv>
    </ItemCardStyled>
  )
}

export default ItemCard
