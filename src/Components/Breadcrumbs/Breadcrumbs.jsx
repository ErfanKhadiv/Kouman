import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../../../public/duotone/angle-right.svg'
import { Link } from 'react-router'

export const Breadcrumbs = (props) => {

    let product_data = props.product;

    return (
        <div className='breadcrumbs'>
            <div className='breadcrumbs-box'>
                <p>
                    <Link className='links' to={'/'}>topialand <img src={arrow_icon} alt="arrow" /></Link>
                    <Link className='links' to={`/${product_data.category}`}>{product_data.category} <img src={arrow_icon} alt="arrow" /></Link>
                    {product_data.name}
                </p>
            </div>
        </div>
    )
}
