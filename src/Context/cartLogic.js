// Pure cart logic: no React, no DOM. Easy to unit-test (see /tests).

export const STORAGE_KEY = 'kouman-cart-v1'
export const SHIPPING_FEE = 25000
export const MAX_QTY = 99

// Demo-only discount codes (rate = fraction taken off the subtotal).
export const DISCOUNT_CODES = {
  KOUMAN10: 0.1,
}

const clampQty = (qty) => {
  const n = Math.floor(Number(qty))
  if (!Number.isFinite(n)) return 0
  return Math.min(Math.max(n, 0), MAX_QTY)
}

/** Cart state shape: { [productId]: quantity } — only items with qty > 0 are kept. */
export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const qty = clampQty((state[action.id] || 0) + clampQty(action.qty))
      return qty > 0 ? { ...state, [action.id]: qty } : state
    }
    case 'set': {
      const qty = clampQty(action.qty)
      if (qty === 0) {
        const { [action.id]: _removed, ...rest } = state
        return rest
      }
      return { ...state, [action.id]: qty }
    }
    case 'remove': {
      const { [action.id]: _removed, ...rest } = state
      return rest
    }
    case 'clear':
      return {}
    default:
      return state
  }
}

/** Rebuilds a safe cart from untrusted JSON (localStorage can be edited or stale). */
export const parseStoredCart = (raw, validIds) => {
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    const ids = new Set(validIds.map(String))
    const cart = {}
    for (const [id, qty] of Object.entries(parsed)) {
      const q = clampQty(qty)
      if (ids.has(id) && q > 0) cart[id] = q
    }
    return cart
  } catch {
    return {}
  }
}

export const buildCartLines = (cart, products) =>
  products
    .filter((p) => cart[p.id] > 0)
    .map((p) => ({
      product: p,
      qty: cart[p.id],
      lineTotal: p.price * cart[p.id],
    }))

export const calculateTotals = (lines, discountRate = 0) => {
  const count = lines.reduce((sum, l) => sum + l.qty, 0)
  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0)
  const discount = Math.round(subtotal * discountRate)
  const shipping = subtotal > 0 ? SHIPPING_FEE : 0
  return { count, subtotal, discount, shipping, total: subtotal - discount + shipping }
}
