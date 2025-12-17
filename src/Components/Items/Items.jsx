import React, { useState } from 'react'
import './Items.css'
import { Link } from 'react-router'

export const Items = (props) => {

    let [image, setImage] = useState(props.image1)

    return (
        <div className='item'>
            <div className='img-box'>
                <Link to={`/product/${props.id}`}>
                    <img onMouseOver={() => setImage(props.image2)}
                        onMouseOut={() => setImage(props.image1)}
                        src={image}
                        onClick={() => window.scrollTo(0, 100)}
                        alt="product picture" />
                </Link>
            </div>
            <div className='item-name item-info'>
                <span>{props.name}</span>
            </div>
            <div className='item-price item-info'>
                <span>{props.price} تومان</span>
            </div>
        </div>
    )
}
