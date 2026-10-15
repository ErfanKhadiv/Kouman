import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'
import { useProducts } from '../Context/useProducts'
import { useLanguage } from '../i18n/useLanguage'

export const Clothes = () => {
  const { data } = useProducts()
  const { t } = useLanguage()
  const clothes = data.filter((item) => item.category === 'clothes')

  return <ProductsDisplay title={t('titleClothes')} products={clothes} />
}
