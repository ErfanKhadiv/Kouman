import { useEffect, useMemo, useReducer, useCallback } from 'react'
import rawData from '../Components/Assets/All_Products/all_products'
import { useLanguage } from '../i18n/useLanguage'
import { localizeProduct } from '../i18n/productsEn'
import { ProductsContext } from './useProducts'
import {
  STORAGE_KEY,
  buildCartLines,
  calculateTotals,
  cartReducer,
  parseStoredCart,
} from './cartLogic'

const loadInitialCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? parseStoredCart(raw, rawData.map((p) => p.id)) : {}
  } catch {
    return {} // storage blocked (private mode, etc.)
  }
}

const ProductsContextProvider = ({ children }) => {
  const { lang } = useLanguage()
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadInitialCart)
  const data = useMemo(() => rawData.map((p) => localizeProduct(p, lang)), [lang])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      /* ignore: cart simply won't persist */
    }
  }, [cart])

  const addToCart = useCallback((id, qty = 1) => dispatch({ type: 'add', id, qty }), [])
  const setQuantity = useCallback((id, qty) => dispatch({ type: 'set', id, qty }), [])
  const removeFromCart = useCallback((id) => dispatch({ type: 'remove', id }), [])
  const clearCart = useCallback(() => dispatch({ type: 'clear' }), [])

  const cartLines = useMemo(() => buildCartLines(cart, data), [cart, data])
  const cartCount = useMemo(() => calculateTotals(cartLines).count, [cartLines])

  const value = useMemo(
    () => ({
      data,
      cart,
      cartLines,
      cartCount,
      addToCart,
      setQuantity,
      removeFromCart,
      clearCart,
    }),
    [data, cart, cartLines, cartCount, addToCart, setQuantity, removeFromCart, clearCart],
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
