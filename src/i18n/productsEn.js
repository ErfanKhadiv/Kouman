// English text for the product catalog (Persian originals stay in all_products.js).
export const PRODUCT_NAMES_EN = {
  1: 'Dogm Nabash T-shirt',
  2: 'Mialand T-shirt',
  3: 'Kouman Mug',
  4: 'Kourosh Zarandooz T-shirt',
  5: 'Iman Desktop T-shirt',
  6: 'Alhafozligh T-shirt',
}

// Keyed by the exact Persian description line.
export const PRODUCT_DES_EN = {
  'ارسال به همراه استیکر پک و کارت تشکر هدیه': 'Shipped with a sticker pack and a free thank-you card',
  '۱۰۰‌٪ پنبه از دشت‌های کورشتوپیا': '100% cotton from the fields of Kourshtopia',
  'دوخته شده توسط خیاط‌های زبردست ایمان آباد': 'Sewn by skilled tailors of Iman Abad',
  'چاپ سیلک برجسته توسط هنرمندان میالند': 'Embossed silk-screen print by Mialand artists',
  'طراح: احمد': 'Designer: Ahmad',
  'طراح: مهدی': 'Designer: Mehdi',
  'کاملا دست ساز': 'Fully handmade',
}

export const localizeProduct = (product, lang) =>
  lang === 'en'
    ? {
        ...product,
        name: PRODUCT_NAMES_EN[product.id] ?? product.name,
        des: product.des.map((line) => PRODUCT_DES_EN[line.trim()] ?? line),
      }
    : product
