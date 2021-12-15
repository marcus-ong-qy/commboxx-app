import styled, { css } from 'styled-components'
import { EditOutlined, WechatOutlined } from '@ant-design/icons'
import { chromeWhite, grey } from '../../styles/Colours'

export const ProductPhoto = styled.img`
  width: 100%;
  height: 36vh;
`

export const ProductPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductName = styled.h1`
  font-size: 32px;
  line-height: 32px;
`

export const InfoDivStyled = styled.div`
  width: 84vw;
  min-height: 49vh;
  border-radius: 26px 26px 0 0;
  background: ${chromeWhite};

  display: flex;
  flex-direction: column;
  align-items: space-between;
`

export const InfoParaStyled = styled.p`
  min-height: 6vh;
  font-size: 20px;
  line-height: 22.5px;
  margin: 2.5vh 0 5vh 5vw;
`

const buttonStyled = css`
  margin: 5vw;
  margin-top: 0;
  height: 8vh;

  border-radius: 10px;
  border-style: solid;
  border-width: 1.5px;
  box-shadow: 0 1px 2px gray;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const buttonLogo = css`
  margin-right: 5vw;
  svg {
    width: 36px;
    height: 36px;
  }

  cursor: pointer;
`

const buttonLabel = css`
  font-size: 1.8rem;
`

export const ChatButtonStyled = styled.div`
  ${buttonStyled}
  background: ${grey};
`

export const ChatButtonLogo = styled(WechatOutlined)`
  ${buttonLogo}
`

export const ChatButtonLabel = styled.h3`
  ${buttonLabel}
`

export const EditButtonStyled = styled.div`
  ${buttonStyled}
  background: orange;
`

export const EditButtonLogo = styled(EditOutlined)`
  ${buttonLogo}
`

export const EditButtonLabel = styled.h3`
  ${buttonLabel}
`
