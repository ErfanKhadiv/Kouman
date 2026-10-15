import { useState } from 'react'
import { Link } from 'react-router'
import './Items.css'
import { formatPrice } from '../../utils/format'
import { useLanguage } from '../../i18n/useLanguage'

export const Items = ({ id, name, image1, image2, price }) => {
  const { t } = useLanguage()
  const [image, setImage] = useState(image1)

  return (
    <div className='item'>
      <div className='img-box'>
        <Link
          to={`/product/${id}`}
          onMouseEnter={() => setImage(image2)}
          onMouseLeave={() => setImage(image1)}
          onFocus={() => setImage(image2)}
          onBlur={() => setImage(image1)}
        >
          <img src={image} alt={name} loading='lazy' />
        </Link>
      </div>
      <div className='item-name item-info'>
        <span>{name}</span>
      </div>
      <div className='item-price item-info'>
        <span>{formatPrice(price)} {t('currency')}</span>
      </div>
    </div>
  )
}
