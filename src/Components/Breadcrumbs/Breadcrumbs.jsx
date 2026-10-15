import './Breadcrumbs.css'
import arrow_icon from '../../../public/duotone/angle-right.svg'
import { Link } from 'react-router'
import { useLanguage } from '../../i18n/useLanguage'

const CATEGORY_KEYS = {
  clothes: 'navClothes',
  accessory: 'navAccessory',
}

export const Breadcrumbs = ({ product }) => {
  const { t } = useLanguage()

  return (
    <nav className='breadcrumbs' aria-label={t('breadcrumbAria')}>
      <div className='breadcrumbs-box'>
        <p>
          <Link className='links' to='/'>
            {t('navHome')} <img src={arrow_icon} alt='' />
          </Link>
          <Link className='links' to={`/${product.category}`}>
            {t(CATEGORY_KEYS[product.category] ?? 'navHome')} <img src={arrow_icon} alt='' />
          </Link>
          {product.name.trim()}
        </p>
      </div>
    </nav>
  )
}
