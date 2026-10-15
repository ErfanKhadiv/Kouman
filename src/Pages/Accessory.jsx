import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'
import { useProducts } from '../Context/useProducts'
import { useLanguage } from '../i18n/useLanguage'

export const Accessory = () => {
  const { data } = useProducts()
  const { t } = useLanguage()
  const accessories = data.filter((item) => item.category === 'accessory')

  return <ProductsDisplay title={t('titleAccessory')} products={accessories} />
}
