import React from 'react'
import './Banners.css'

export const Banners = (props) => {
    return (
        <div className='banner-box'>
            <img className='banner' src={props.banner} alt="banner" />
        </div>
    )
}
