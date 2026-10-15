import { Link } from 'react-router'
import './Footer.css'
import logo_icon from '../Assets/topialand.crop_111111111111111_27a8b3c8-9fbd-470f-b8b9-6aa4ec3e7b69.png'
import instagram_icon from './instagram-svgrepo-com.svg'
import telegram_icon from './telegram-svgrepo-com.svg'
import youtube_icon from './youtube-svgrepo-com.svg'
import location_icon from '../../../public/duotone/location-dot.svg'
import { useLanguage } from '../../i18n/useLanguage'

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className='footer'>
      <div className='footer-item'>
        <span>{t('footerShop')}</span>
        <hr />
        <p><Link to='/clothes'>{t('navClothes')}</Link></p>
        <p><Link to='/accessory'>{t('navAccessory')}</Link></p>
      </div>

      <div className='footer-item'>
        <span>{t('footerServices')}</span>
        <hr />
        <p><Link to='/cart'>{t('footerCart')}</Link></p>
        <p><Link to='/loginsignup'>{t('login')}</Link></p>
      </div>

      <div className='footer-item contact-info'>
        <span>{t('footerContact')}</span>
        <hr />
        <div className='contact-icons'>
          <img src={instagram_icon} alt={t('instagram')} />
          <img src={telegram_icon} alt={t('telegram')} />
          <img src={youtube_icon} alt={t('youtube')} />
        </div>
        <div className='location-info'>
          <img src={location_icon} alt='' />
          <p>{t('footerAddress')}</p>
        </div>

        <img className='logo-footer' src={logo_icon} alt='' />
      </div>
    </footer>
  )
}
