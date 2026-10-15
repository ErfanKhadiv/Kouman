import { useParams } from 'react-router'
import { useProducts } from '../Context/useProducts'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { ProductPage } from '../Components/ProductPage/ProductPage'
import { NotFound } from './NotFound'

export const ProductInfo = () => {
  const { data } = useProducts()
  const { productId } = useParams()
  const product = data.find((p) => p.id === Number(productId))

  if (!product) return <NotFound messageKey='productNotFound' />

  return (
    <div>
      <Breadcrumbs product={product} />
      {/* key resets image/quantity state when navigating between products */}
      <ProductPage key={product.id} product={product} />
    </div>
  )
}
