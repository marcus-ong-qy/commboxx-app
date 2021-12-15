import { Button, Input } from 'antd'
import styled from 'styled-components'
import { chromeWhite, lemonBg } from '../../styles/Colours'

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
export const AccountStyle = styled.p`
  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 21px;
  line-height: 22px;
  color: #254ddc;
  margin: 20px;
`
export const InputStyle = styled.p`
  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  margin: 20px 0px 0px 20px;
`
export const UserDetailStyle = styled.p`
  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
`
export const InputStyled = styled(Input)`
  margin: 5px 20px;
  size: 'large';
  width: 65vw;
  height: 35px;
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    line-height: 4;
    border-radius: 2px;
  }
`
export const StyledButton = styled(Button)`
  margin: 5vw 5vw 0 5vw;
  height: 35px;
  width: 70vw;
`
