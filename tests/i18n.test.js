import test from 'node:test'
import assert from 'node:assert/strict'
import { translations, translate } from '../src/i18n/translations.js'
import { PRODUCT_DES_EN, PRODUCT_NAMES_EN } from '../src/i18n/productsEn.js'

test('fa and en define exactly the same keys', () => {
  const fa = Object.keys(translations.fa).sort()
  const en = Object.keys(translations.en).sort()
  assert.deepEqual(en, fa)
})

test('placeholders match between languages', () => {
  const vars = (s) => (s.match(/\{\w+\}/g) || []).sort().join(',')
  for (const key of Object.keys(translations.fa)) {
    assert.equal(vars(translations.en[key]), vars(translations.fa[key]), key)
  }
})

test('translate fills variables and falls back to the key', () => {
  assert.equal(translate('en', 'itemsPrice', { n: 3 }), 'Items (3)')
  assert.equal(translate('en', 'does-not-exist'), 'does-not-exist')
})

test('every product has an English name and description lines', () => {
  assert.equal(Object.keys(PRODUCT_NAMES_EN).length, 6)
  for (const line of Object.keys(PRODUCT_DES_EN)) assert.ok(PRODUCT_DES_EN[line].length > 0)
})
