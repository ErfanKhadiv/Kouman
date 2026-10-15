import './Banners.css'
import { useLanguage } from '../../i18n/useLanguage'

export const Banners = ({ banner }) => {
  const { t } = useLanguage()

  return (
    <div className='banner-box'>
      <img className='banner' src={banner} alt={t('bannerAlt')} />
    </div>
  )
}
