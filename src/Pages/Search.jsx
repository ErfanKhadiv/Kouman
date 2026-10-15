import { useSearchParams } from 'react-router'
import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'
import { useProducts } from '../Context/useProducts'
import { useLanguage } from '../i18n/useLanguage'

export const Search = () => {
  const { data } = useProducts()
  const { t } = useLanguage()
  const [params] = useSearchParams()
  const query = (params.get('q') || '').trim()

  const needle = query.toLowerCase()
  const results = query ? data.filter((item) => item.name.toLowerCase().includes(needle)) : []

  return (
    <ProductsDisplay
      title={query ? t('searchResults', { q: query }) : t('search')}
      products={results}
    />
  )
}
