import test from 'node:test'
import assert from 'node:assert/strict'
import {
  MAX_QTY,
  SHIPPING_FEE,
  buildCartLines,
  calculateTotals,
  cartReducer,
  parseStoredCart,
} from '../src/Context/cartLogic.js'

const products = [
  { id: 1, price: 1000 },
  { id: 2, price: 500 },
]

test('add accumulates quantity and ignores invalid amounts', () => {
  let s = cartReducer({}, { type: 'add', id: 1, qty: 2 })
  s = cartReducer(s, { type: 'add', id: 1, qty: 3 })
  assert.deepEqual(s, { 1: 5 })
  assert.deepEqual(cartReducer({}, { type: 'add', id: 1, qty: -4 }), {})
  assert.deepEqual(cartReducer({}, { type: 'add', id: 1, qty: 'abc' }), {})
})

test('quantity is capped at MAX_QTY', () => {
  const s = cartReducer({ 1: MAX_QTY - 1 }, { type: 'add', id: 1, qty: 10 })
  assert.equal(s[1], MAX_QTY)
})

test('set to 0 removes the line; remove and clear work', () => {
  assert.deepEqual(cartReducer({ 1: 2, 2: 1 }, { type: 'set', id: 1, qty: 0 }), { 2: 1 })
  assert.deepEqual(cartReducer({ 1: 2, 2: 1 }, { type: 'remove', id: 2 }), { 1: 2 })
  assert.deepEqual(cartReducer({ 1: 2 }, { type: 'clear' }), {})
})

test('parseStoredCart drops unknown ids, bad quantities and bad JSON', () => {
  assert.deepEqual(parseStoredCart('{"1":2,"99":3,"2":-1}', [1, 2]), { 1: 2 })
  assert.deepEqual(parseStoredCart('not json', [1]), {})
  assert.deepEqual(parseStoredCart('[1,2]', [1]), {})
})

test('totals: subtotal, discount, shipping', () => {
  const lines = buildCartLines({ 1: 2, 2: 1 }, products)
  assert.deepEqual(calculateTotals(lines), {
    count: 3,
    subtotal: 2500,
    discount: 0,
    shipping: SHIPPING_FEE,
    total: 2500 + SHIPPING_FEE,
  })
  assert.equal(calculateTotals(lines, 0.1).discount, 250)
})

test('empty cart has no shipping fee', () => {
  const t = calculateTotals([])
  assert.equal(t.shipping, 0)
  assert.equal(t.total, 0)
})
