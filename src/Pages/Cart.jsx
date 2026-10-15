import { useState } from 'react'
import { Link } from 'react-router'
import './CSS/Cart.css'
import { useProducts } from '../Context/useProducts'
import { DISCOUNT_CODES, MAX_QTY, calculateTotals } from '../Context/cartLogic'
import { formatNumber, formatPrice } from '../utils/format'
import { useLanguage } from '../i18n/useLanguage'
import cross_icon from '../../public/duotone/xmark.svg'

export const Cart = () => {
  const { cartLines, setQuantity, removeFromCart } = useProducts()
  const { t } = useLanguage()

  const [codeInput, setCodeInput] = useState('')
  const [appliedCode, setAppliedCode] = useState(null)
  const [codeStatus, setCodeStatus] = useState(null) // 'ok' | 'bad' | null
  const [showDemoNote, setShowDemoNote] = useState(false)

  const rate = appliedCode ? DISCOUNT_CODES[appliedCode] : 0
  const { count, subtotal, discount, shipping, total } = calculateTotals(cartLines, rate)

  const applyCode = (e) => {
    e.preventDefault()
    const code = codeInput.trim().toUpperCase()
    if (DISCOUNT_CODES[code]) {
      setAppliedCode(code)
      setCodeStatus('ok')
    } else {
      setAppliedCode(null)
      setCodeStatus('bad')
    }
  }

  return (
    <div className='cart'>
      <div className='cart-title'>
        <ul>
          <li>{t('colProduct')}</li>
          <li>{t('colName')}</li>
          <li>{t('colPrice')}</li>
          <li>{t('colQty')}</li>
          <li>{t('colTotal')}</li>
          <li>{t('colRemove')}</li>
        </ul>
        <hr />
      </div>

      <div className='cart-items-box'>
        {cartLines.map(({ product, qty, lineTotal }) => (
          <div key={product.id}>
            <div className='cart-items'>
              <Link to={`/product/${product.id}`}>
                <img className='item-img' src={product.image[0]} alt={product.name.trim()} />
              </Link>
              <p>{product.name.trim()}</p>
              <p>{formatPrice(product.price)}</p>
              <div className='qty-controls'>
                <button
                  type='button'
                  onClick={() => setQuantity(product.id, qty - 1)}
                  aria-label={t('decreaseItem', { name: product.name.trim() })}
                >
                  −
                </button>
                <span>{formatNumber(qty)}</span>
                <button
                  type='button'
                  onClick={() => setQuantity(product.id, qty + 1)}
                  disabled={qty >= MAX_QTY}
                  aria-label={t('increaseItem', { name: product.name.trim() })}
                >
                  +
                </button>
              </div>
              <p>{formatPrice(lineTotal)}</p>
              <button
                type='button'
                className='remove-button'
                onClick={() => removeFromCart(product.id)}
                aria-label={t('removeItem', { name: product.name.trim() })}
              >
                <img className='cross-icon' src={cross_icon} alt='' />
              </button>
            </div>
            <hr />
          </div>
        ))}
        {cartLines.length === 0 && (
          <div className='empty-basket'>
            <p>{t('emptyCart')}</p>
          </div>
        )}
      </div>

      <div className='purchase'>
        <div className='purchase-right'>
          <span>{t('invoice')}</span>
          <hr />
          <div>
            <p>{t('itemsPrice', { n: formatNumber(count) })}</p>
            <p className='bold-text'>{formatPrice(subtotal)} {t('currency')}</p>
          </div>
          {discount > 0 && (
            <div>
              <p>{t('discount')}</p>
              <p className='bold-text'>−{formatPrice(discount)} {t('currency')}</p>
            </div>
          )}
          <div>
            <p>{t('shipping')}</p>
            <p className='bold-text'>{formatPrice(shipping)} {t('currency')}</p>
          </div>
          <div>
            <p>{t('payable')}</p>
            <p className='bold-text'>{formatPrice(total)} {t('currency')}</p>
          </div>
          <button
            type='button'
            disabled={cartLines.length === 0}
            onClick={() => setShowDemoNote(true)}
          >
            {t('checkout')}
          </button>
          {showDemoNote && <p className='cart-message' role='status'>{t('demoNote')}</p>}
        </div>

        <form className='purchase-left' onSubmit={applyCode}>
          <span>{t('discountCode')}</span>
          <hr />
          <div>
            <input
              type='text'
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder={t('enterCode')}
              aria-label={t('discountCode')}
            />
            <button type='submit'>{t('apply')}</button>
          </div>
          {codeStatus && (
            <p className='cart-message' role='status'>{t(codeStatus === 'ok' ? 'codeOk' : 'codeBad')}</p>
          )}
        </form>
      </div>
    </div>
  )
}
