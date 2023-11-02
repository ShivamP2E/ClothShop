import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplayy/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProduct/RelatedProducts';
// Product page: opens when we click on any image.
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product = {product}/>
      <ProductDisplay product= {product}/>
      <DescriptionBox/>
      <RelatedProducts />
    </div>
  )
}

export default Product;