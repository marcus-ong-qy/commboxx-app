import React, { useState } from 'react'
import {
  AccountDetails,
  ImageBox,
  InputStyled,
  InputStyledDetail,
  MainProfileBox,
  StyledButton,
  StyledProfilePage,
} from './styles/LoaningPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/PATHS'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, addItemOffline } from '../../store/actions'
import { ItemType, RootState } from '../../store/types'
import { usingBackend } from '../../store/reducer'

import commboxxLogo from '../../assets/commboxx-logos.jpeg'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loginCredentials } = useSelector((state: RootState) => state.commboxx_reducer)

  const initialItemInfo: ItemType = {
    photo: commboxxLogo,
    itemID: Math.floor(Math.random() * 1000000),
    itemName: '',
    userID: '1234567',
    userName: loginCredentials.userID,
    description: '',
    remarks: '',
    tags: [],
    status: 0,
  }

  const [itemInfo, setItemInfo] = useState(initialItemInfo)

  return (
    <StyledProfilePage>
      <MainProfileBox>
        <ImageBox src={commboxxLogoTransparent}></ImageBox>
        <AccountDetails>
          <InputStyled
            placeholder="Item name"
            value={itemInfo.itemName}
            onChange={(e) => setItemInfo({ ...itemInfo, itemName: e.target.value })}
          />
          <InputStyledDetail
            placeholder="Description"
            rows={4}
            value={itemInfo.description}
            onChange={(e) => setItemInfo({ ...itemInfo, description: e.target.value })}
          />
          <InputStyledDetail
            placeholder="Remarks"
            rows={4}
            value={itemInfo.remarks}
            onChange={(e) => setItemInfo({ ...itemInfo, remarks: e.target.value })}
          />
          <InputStyledDetail
            placeholder="Tags (seperate by commas)"
            rows={1}
            value={itemInfo.tags?.join(', ')}
            onChange={(e) => setItemInfo({ ...itemInfo, tags: e.target.value.split(', ') })}
          />
        </AccountDetails>
        <StyledButton
          onClick={() => {
            usingBackend ? addItem(itemInfo) : dispatch(addItemOffline(itemInfo))
            navigate(PATHS.MAIN)
          }}
        >
          Post
        </StyledButton>
      </MainProfileBox>
    </StyledProfilePage>
  )
}

export default ProfilePage
