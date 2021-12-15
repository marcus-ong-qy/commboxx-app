import { Button } from 'antd'
import styled from 'styled-components'
import { chromeWhite } from '../../styles/Colours'

export const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemCardsDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export const PostButtonStyled = styled(Button)`
  width: 78vw;
  height: 8vh;
  background: ${chromeWhite};
  border-radius: 10px;
  border-style: solid;
  border-width: 1.5px;
  box-shadow: 0 1px 2px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-style: italic;
`
