import React, {useContext, useState} from 'react'
import { Link } from 'react-router'
import search_icon from '../../../public/duotone/magnifying-glass.svg'
import basket_icon from '../../../public/duotone/basket-shopping.svg'
import logo_icon from '../Assets/topialand.crop_111111111111111_27a8b3c8-9fbd-470f-b8b9-6aa4ec3e7b69.png'
import './Header.css'
import { ProductsContext } from '../../Context/ProductsContext'

export const Header = () => {

    const [menu, setMenu] = useState("MainPage");
    const {cartItemsNumbers} = useContext(ProductsContext)

    return (
        <div className='header'>
            <div className="container">
                <div className='size-info'>
                    <h2>سایز میا: S ، سایز کوروش: M ، سایز ایمان: L</h2>
                </div>
                <div className='header-top'>
                    <p>فروشگاه رسمی عرضه محصولات میاپلیز و کومان</p>
                </div>
                <div className='header-main'>
                    <div className="header-main-top">
                        <div className='login-basket'>
                            <div className='basket-box'>
                                <Link to={'/cart'}>
                                    <img className='basket-icon' src={basket_icon} alt="" />
                                </Link>
                                <div className='cart-item-count'>{cartItemsNumbers()}</div>
                            </div>

                            <Link to={'/loginsignup'} style={{textDecoration: 'none', color: '#1a1a1a'}}>
                                <div className='loginsignup-button'>
                                    <p>ورود | ثبت‌نام</p>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
                                <img className='logo-icon' src={logo_icon} alt="" />
                            </Link>
                        </div>

                        <div>
                            <img className='search-icon' src={search_icon} alt="" />
                        </div>
                        
                    </div>
                    <div className="header-main-nav">
                        <nav>
                            <ul>
                                <li onClick={() => setMenu('MainPage')}
                                    style={{
                                        transform: menu === "MainPage" ? "scale(1.5)" : "",
                                        transition: "transform 0.3s ease"
                                    }}>
                                    <Link to='/' style={{textDecoration:'none', color:'#1a1a1a'}}>صفحه اصلی</Link>
                                    {menu==="MainPage" ? <hr/> : <></>}
                                </li>
                                <li onClick={() => setMenu('Clothes')}
                                    style={{
                                        transform: menu === "Clothes" ? "scale(1.5)" : "",
                                        transition: "transform 0.3s ease"
                                    }}>
                                    <Link to='/Clothes' style={{textDecoration:'none', color:'#1a1a1a'}}> لباس</Link>
                                    {menu==="Clothes" ? <hr/> : <></>}
                                </li>
                                <li onClick={() => setMenu('Accessory')}
                                    style={{
                                        transform: menu === "Accessory" ? "scale(1.5)" : "",
                                        transition: "transform 0.3s ease"
                                    }}>
                                    <Link to='/Accessory' style={{textDecoration:'none', color:'#1a1a1a'}}> اکسسوری</Link>
                                    {menu==="Accessory" ? <hr/> : <></>}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
