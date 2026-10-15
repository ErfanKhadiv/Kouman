import { Items } from '../Items/Items'
import './ProductsDisplay.css'
import { useLanguage } from '../../i18n/useLanguage'

export const ProductsDisplay = ({ title, products }) => {
  const { t } = useLanguage()

  return (
    <div className='products-box'>
      <h2>{title}</h2>
      {products.length === 0 ? (
        <p className='products-empty'>{t('noProducts')}</p>
      ) : (
        <div className='products-display'>
          {products.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              name={item.name.trim()}
              image1={item.image[1] || item.image[0]}
              image2={item.image[0]}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  )
}
