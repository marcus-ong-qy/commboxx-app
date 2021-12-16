import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, deleteItemOffline, editItem, editItemOffline } from '../../store/actions'
import { ItemType, RootState } from '../../store/types'
import { usingBackend } from '../../store/reducer'
import {
  AccountDetails,
  ImageBox,
  InputStyled,
  InputStyledDetail,
  MainProfileBox,
  StatusDivStyled,
  StyledButton,
  StyledProfilePage,
  StyledWarningButton,
} from './styles/EditPage.styled'

import commboxxLogoTransparent from '../../assets/commboxx-logos_transparent.png'

const StatusDropdown = ({
  itemInfo,
  setItemInfo,
}: {
  itemInfo: ItemType
  setItemInfo: React.Dispatch<React.SetStateAction<ItemType>>
}) => {
  return (
    <select
      defaultValue={itemInfo.status}
      onChange={(e) => setItemInfo({ ...itemInfo, status: parseInt(e.target.value) })}
    >
      <option value={0}>Available</option>
      <option value={1}>On Hold</option>
      <option value={-1}>On Loan</option>
    </select>
  )
}

const EditPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams<'productID'>()
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)
  const [displayItems, setDisplayItems] = useState(commspaceItems)

  useEffect(() => {
    setDisplayItems(commspaceItems)
  }, [commspaceItems])

  const productData: ItemType | undefined = displayItems?.filter(
    (item) => item.itemID === parseInt(params.productID ?? ''),
  )[0]

  const [itemInfo, setItemInfo] = useState(productData)

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
          <StatusDivStyled>
            Status: <StatusDropdown itemInfo={itemInfo} setItemInfo={setItemInfo} />
          </StatusDivStyled>
        </AccountDetails>
        <StyledButton
          onClick={() => {
            usingBackend ? editItem(itemInfo) : dispatch(editItemOffline(itemInfo))
            navigate(-1)
          }}
        >
          Update
        </StyledButton>
        <StyledWarningButton
          onClick={() => {
            usingBackend ? deleteItem(itemInfo) : dispatch(deleteItemOffline(itemInfo))
            navigate(PATHS.MAIN)
          }}
        >
          Delete
        </StyledWarningButton>
      </MainProfileBox>
    </StyledProfilePage>
  )
}

export default EditPage
