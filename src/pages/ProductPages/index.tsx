import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getItem } from '../../store/actions'
import { usingBackend } from '../../store/reducer'

import { ItemType, RootState } from '../../store/types'
import {
  ChatButtonLabel,
  ChatButtonLogo,
  ChatButtonStyled,
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
  return (
    <InfoDivStyled>
      <InfoPara label={'Description'} content={productData.description} />
      <InfoPara label={'Lender'} content={productData.userName} />
      <InfoPara label={'Remarks'} content={productData.remarks} />
      <ChatButton />
    </InfoDivStyled>
  )
}

const ChatButton = () => {
  return (
    <ChatButtonStyled>
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
