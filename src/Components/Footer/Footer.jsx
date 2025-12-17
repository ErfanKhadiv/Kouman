import React from 'react'
import './Footer.css'
import logo_icon from '../../Components/Assets/topialand.crop_111111111111111_27a8b3c8-9fbd-470f-b8b9-6aa4ec3e7b69.png'
import instagram_icon from './instagram-svgrepo-com.svg'
import telegram_icon from './telegram-svgrepo-com.svg'
import youtube_icon from './youtube-svgrepo-com.svg'
import location_icon from '../../../public/duotone/location-dot.svg'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-item'>
                <span>فروشگاه</span>
                <hr />

                <p>
                    <a href="">لباس</a>
                </p>

                <p>
                    <a href="">اکسسوری</a>
                </p>
            </div>

            <div className='footer-item'>
                <span>خدمات</span>
                <hr />

                <p>
                    <a href="">تماس با ما</a>
                </p>

                <p>
                    <a href="">قوانین و مقررات</a>
                </p>
            </div>

            <div className='footer-item contact-info'>
                <span>با ما در تماس باشید</span>
                <hr />
                <div className='contact-icons'>
                    <img src={instagram_icon} alt="" />
                    <img src={telegram_icon} alt="" />
                    <img src={youtube_icon} alt="" />
                </div>
                <div className='location-info'>
                    <img src={location_icon} alt="" />
                    <p>تهران، جمالزاده، خ غلامرضا حمصیان، خ محمدعلی صدوقی</p>
                </div>

                <img className='logo-footer' src={logo_icon} alt="" />
            </div>
        </div>
    )
}
