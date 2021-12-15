import styled, { css } from 'styled-components'

export const ItemCardStyled = styled.div`
  width: 244px;
  min-height: 294px;

  margin: 13px;

  border-style: solid;
  border-weight: 6px;
  border-radius: 10px;
  box-shadow: 0 2px 6px;

  background: white;
`

export const ItemCardImage = styled.img`
  width: 100%;
  height: 130px;

  border-radius: 10px 10px 0 0;
`

const cardTextStyle = css`
  margin: 8px;
  margin-left: 19px;
`

export const ItemCardTitle = styled.h2`
  ${cardTextStyle}
  font-size: 24px;
`

export const ItemCardFrom = styled.p`
  ${cardTextStyle}
  font-style: italic;
`

export const ItemCardTagsDiv = styled.p`
  ${cardTextStyle}
  height: 12px;
  /* text-overflow: ellipsis;
  overflow: scroll; */
  margin-bottom: 20px;
`

export const ItemCardTags = styled.span`
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
`

export const ItemCardStatusDiv = styled.div`
  ${cardTextStyle}
`

export const StatusTag = styled.div.attrs({})<{ bg: string }>`
  padding: 0.25rem;

  border-style: solid;
  border-color: black;
  border-width: 1.5px;
  border-radius: 0.6rem;

  display: inline;
  background: ${(props) => props.bg};
  color: white;
`
