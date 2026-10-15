import { Link } from 'react-router'
import './CSS/NotFound.css'
import { useLanguage } from '../i18n/useLanguage'

export const NotFound = ({ messageKey = 'notFound' }) => {
  const { t } = useLanguage()

  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>{t(messageKey)}</p>
      <Link to='/'>{t('backHome')}</Link>
    </div>
  )
}
