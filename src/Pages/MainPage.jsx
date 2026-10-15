import './CSS/MainPage.css'
import { Banners } from '../Components/Banners/Banners'
import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'
import { useProducts } from '../Context/useProducts'
import { useLanguage } from '../i18n/useLanguage'

export const MainPage = ({ banner }) => {
  const { data } = useProducts()
  const { t } = useLanguage()

  return (
    <div>
      <Banners banner={banner} />
      <ProductsDisplay title={t('titleAll')} products={data} />
    </div>
  )
}
