import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { getItem } from '../../store/actions'
import { usingBackend } from '../../store/reducer'
import { ItemType, RootState } from '../../store/types'
import {
  ChatButtonLabel,
  ChatButtonLogo,
  ChatButtonStyled,
  EditButtonLabel,
  EditButtonLogo,
  EditButtonStyled,
  InfoDivStyled,
  InfoParaStyled,
  ProductName,
  ProductPageStyled,
  ProductPhoto,
} from './styles/ProductPages.styled'

const InfoPara = ({ label, content }: { label: string; content: string }) => {
  return (
    <InfoParaStyled>
      <b>{label}:</b>&nbsp;{content}
    </InfoParaStyled>
  )
}

const InfoDiv = ({ productData }: { productData: ItemType }) => {
  const navigate = useNavigate()
  const { loginCredentials } = useSelector((state: RootState) => state.commboxx_reducer)
  const isOwner: boolean = productData.userName === loginCredentials.userID
  const userTelegram: string = 'marcus_ong_qy'

  return (
    <InfoDivStyled>
      <InfoPara label={'Description'} content={productData.description} />
      <InfoPara label={'Lender'} content={productData.userName} />
      <InfoPara label={'Remarks'} content={productData.remarks} />
      {isOwner ? (
        <EditButton onClick={() => navigate(`${PATHS.PRODUCT_PAGE}/${productData.itemID}${PATHS.EDIT_PAGE}`)} />
      ) : (
        <ChatButton onClick={() => window.location.assign(`https://t.me/${userTelegram}`)} />
      )}
    </InfoDivStyled>
  )
}

const EditButton = ({ onClick }: { onClick: any }) => {
  return (
    <EditButtonStyled onClick={onClick}>
      <EditButtonLogo />
      <EditButtonLabel>Edit</EditButtonLabel>
    </EditButtonStyled>
  )
}

const ChatButton = ({ onClick }: { onClick: any }) => {
  return (
    <ChatButtonStyled onClick={onClick}>
      <ChatButtonLogo />
      <ChatButtonLabel>Chat</ChatButtonLabel>
    </ChatButtonStyled>
  )
}

const ProductPages = () => {
  const dispatch = useDispatch()
  const params = useParams<'productID'>()
  const { commspaceItems } = useSelector((state: RootState) => state.commboxx_reducer)
  const [displayItems, setDisplayItems] = useState(commspaceItems) // TODO search/filter results

  useEffect(() => {
    usingBackend && dispatch(getItem())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setDisplayItems(commspaceItems)
  }, [commspaceItems])

  const productData: ItemType | undefined = displayItems?.filter(
    (item) => item.itemID === parseInt(params.productID ?? ''),
  )[0]

  // productData && ...
  return (
    <ProductPageStyled>
      <ProductPhoto src={productData.photo} />
      <ProductName>{productData.itemName}</ProductName>
      <InfoDiv productData={productData} />
    </ProductPageStyled>
  )
}

export default ProductPages
