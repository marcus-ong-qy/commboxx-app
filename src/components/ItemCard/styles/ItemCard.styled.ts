import styled, { css } from 'styled-components'

export const ItemCardStyled = styled.div`
  width: 244px;
  min-height: 244px;

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
  margin-left: 19px;
`

export const ItemCardTitle = styled.h2`
  ${cardTextStyle}
  font-size: 24px;
`

export const ItemCardFrom = styled.em`
  ${cardTextStyle}
  margin-bottom: 20px;
`
