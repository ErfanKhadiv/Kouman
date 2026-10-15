// Latin digits with thousands separators (same look as the original site: 850,000).
const priceFormatter = new Intl.NumberFormat('en-US')

export const formatPrice = (value) => priceFormatter.format(Number(value) || 0)
export const formatNumber = formatPrice
