import { Button, Input } from 'antd'
import styled from 'styled-components'
import { chromeWhite, lemonBg } from '../../styles/Colours'

const { TextArea } = Input

export const StyledProfilePage = styled.div`
  width: 80vw;
  height: 95%;
  position: absolute;
  background: ${lemonBg};
  bottom: -10%;
  left: 10%;
  right: 10%;
`
export const MainProfileBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
  background: ${chromeWhite};
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: row;
  position: absolute;
  bottom: 0px;
`
export const ImageBox = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 20px 20px 0px 0px;
  background: #f0f0f0;
`
export const AccountDetails = styled.div`
  width: 100%;
  background: ${chromeWhite};
  display: row;
`
export const InputStyled = styled(TextArea)`
  margin: 3vw 5vw 0 3vw;
  width: 70vw;
`
export const InputStyledDetail = styled(TextArea)`
  margin: 3vw 5vw 0 3vw;
  height: 100px;
  width: 70vw;
`
export const StyledButton = styled(Button)`
  margin: 5vw 5vw 0 5vw;
  height: 35px;
  width: 70vw;
`

export const StyledWarningButton = styled(Button)`
  margin: 5vw 5vw 0 5vw;
  height: 35px;
  width: 70vw;

  background: red;
`

export const StatusDivStyled = styled.div`
  margin: 3vw 5vw 0 3vw;
  height: 4vh;

  font-size: 18px;
  select {
    height: 100%;
    width: 30vw;
    font-size: 18px;
    text-align: center;
  }
`
