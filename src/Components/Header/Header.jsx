import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import './Header.css'
import search_icon from '../../../public/duotone/magnifying-glass.svg'
import basket_icon from '../../../public/duotone/basket-shopping.svg'
import logo_icon from '../Assets/topialand.crop_111111111111111_27a8b3c8-9fbd-470f-b8b9-6aa4ec3e7b69.png'
import { useProducts } from '../../Context/useProducts'
import { useLanguage } from '../../i18n/useLanguage'
import { formatNumber } from '../../utils/format'

export const Header = () => {
  const { cartCount } = useProducts()
  const { t, toggleLang } = useLanguage()
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navItems = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/clothes', label: t('navClothes') },
    { to: '/accessory', label: t('navAccessory') },
  ]

  const submitSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
    setSearchOpen(false)
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='size-info'>
          <h2>{t('sizeInfo')}</h2>
        </div>
        <div className='header-top'>
          <p>{t('tagline')}</p>
          <button
            type='button'
            className='lang-switch'
            onClick={toggleLang}
            aria-label={t('langAria')}
          >
            {t('langButton')}
          </button>
        </div>
        <div className='header-main'>
          <div className='header-main-top'>
            <div className='login-basket'>
              <div className='basket-box'>
                <Link to='/cart' aria-label={t('cartAria', { n: formatNumber(cartCount) })}>
                  <img className='basket-icon' src={basket_icon} alt='' />
                </Link>
                <div className='cart-item-count'>{formatNumber(cartCount)}</div>
              </div>

              <Link to='/loginsignup' className='loginsignup-link'>
                <div className='loginsignup-button'>
                  <p>{t('login')}</p>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/'>
                <img className='logo-icon' src={logo_icon} alt={t('logoAlt')} />
              </Link>
            </div>

            <div className='search-box'>
              <button
                type='button'
                className='search-toggle'
                aria-label={t('search')}
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((o) => !o)}
              >
                <img className='search-icon' src={search_icon} alt='' />
              </button>
              {searchOpen && (
                <form className='search-form' role='search' onSubmit={submitSearch}>
                  <input
                    type='search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    aria-label={t('search')}
                    autoFocus
                  />
                </form>
              )}
            </div>
          </div>

          <div className='header-main-nav'>
            <nav aria-label={t('mainMenu')}>
              <ul>
                {navItems.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                      {({ isActive }) => (
                        <>
                          {label}
                          {isActive && <hr />}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
