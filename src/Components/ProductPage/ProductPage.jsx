import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import './ProductPage.css'
import { useProducts } from '../../Context/useProducts'
import { MAX_QTY } from '../../Context/cartLogic'
import { formatNumber, formatPrice } from '../../utils/format'
import { useLanguage } from '../../i18n/useLanguage'

export const ProductPage = ({ product }) => {
  const { addToCart } = useProducts()
  const { t } = useLanguage()
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(0)
  const [added, setAdded] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const images = product.image
  const showPrev = () => setMainImage((i) => (i > 0 ? i - 1 : images.length - 1))
  const showNext = () => setMainImage((i) => (i < images.length - 1 ? i + 1 : 0))

  const handleAdd = () => {
    addToCart(product.id, quantity)
    setAdded(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setAdded(false), 2000)
  }

  const name = product.name.trim()

  return (
    <div className='productpage'>
      <div className='productpage-right'>
        <div>
          <img className='main-img' src={images[mainImage]} alt={name} />
          <div className='img-boxes'>
            <button type='button' onClick={showPrev} aria-label={t('prevImage')}>«</button>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={t('imageAlt', { name, n: i + 1 })}
                role='button'
                tabIndex={0}
                aria-pressed={i === mainImage}
                className={i === mainImage ? 'thumb-active' : undefined}
                onClick={() => setMainImage(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setMainImage(i)
                  }
                }}
              />
            ))}
            <button type='button' onClick={showNext} aria-label={t('nextImage')}>»</button>
          </div>
        </div>
      </div>

      <div className='productpage-left'>
        <span className='brand-link'>
          <Link to='/'>{t('brand')}</Link>
        </span>

        <h1 className='product-name'>{name}</h1>
        <span className='product-price'>{formatPrice(product.price)} {t('currency')}</span>

        {product.category === 'clothes' && (
          <div className='boxs boxes-hover'>
            <span>{t('sizes')}</span>
            <div>S</div>
            <div>M</div>
            <div>L</div>
          </div>
        )}

        <div className='boxs'>
          <span>{t('colors')}</span>
          <div className='white-box'></div>
          <div className='black-box'></div>
          <div className='brown-box'></div>
        </div>

        <div className='des'>
          <ul>
            {product.des.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className='add'>
          <span>{t('quantity')}</span>
          <div className='quantity'>
            <button
              type='button'
              onClick={() => setQuantity((q) => Math.min(q + 1, MAX_QTY))}
              className='plus-button'
              aria-label={t('increase')}
            >
              +
            </button>
            <span className='quantity-value' aria-live='polite'>{formatNumber(quantity)}</span>
            <button
              type='button'
              onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
              className='minus-button'
              aria-label={t('decrease')}
              disabled={quantity === 1}
            >
              -
            </button>
          </div>
        </div>

        <button type='button' onClick={handleAdd} className='addtobasket'>
          <span>{added ? t('added') : t('addToCart')}</span>
        </button>
        {added && (
          <Link to='/cart' className='go-to-cart'>{t('viewCart')}</Link>
        )}
      </div>
    </div>
  )
}
