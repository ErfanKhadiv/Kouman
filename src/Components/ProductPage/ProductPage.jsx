import React, { useContext, useState } from 'react'
import './ProductPage.css'
import { Link } from 'react-router';
import { ProductsContext } from '../../Context/ProductsContext';

export const ProductPage = (props) => {

    const product = props.product;
    const [itemNumber , setItemNumber] = useState(1)

    const increaseItemNumber = () => {
        setItemNumber(i => i + 1)
    }

    const decreaseItemNumber = () => {
        if (itemNumber !== 1) {
            setItemNumber(i => i - 1)
        } 
    }


    const [mainImage, setMainImage] = useState(0);
    const showImage = (imageIndex) => {
        setMainImage(imageIndex);
    };

    const {addToCart} = useContext(ProductsContext)

    return (
        <div className='productpage'>
            <div className='productpage-right'>
                <div>
                    <img className='main-img' src={product.image[mainImage]} alt="" />
                    <div className='img-boxes'>
                        <button onClick={() => setMainImage((prev) =>
                                                            (prev > 0 ?
                                                            prev - 1 :
                                                            product.image.length - 1))}>
                            «
                        </button>
                        {product.image.map((e, i) => {
                            return <img key={i} onClick={() => showImage(i)} src={e} alt="" />
                        })}
                        <button onClick={() => setMainImage((prev) => 
                                                            (prev < product.image.length - 1 ?
                                                            prev + 1 :
                                                            0))}>
                            »
                        </button>
                    </div>
                </div>
            </div>

            <div className='productpage-left'>
                <span className='brand-link'>
                    <Link to={'/'} onClick={() => window.scrollTo(0, 100)}>توپیالند</Link>
                </span>

                <h2 className='product-name'>{product.name}</h2>
                <span className='product-price'>{product.price_display} تومان</span>

                {product.category === "clothes" && (
                    <div className='boxs boxes-hover'>
                        <span>سایزها :</span>
                        <div>
                            S
                        </div>
                        <div>
                            M
                        </div>
                        <div>
                            L
                        </div>
                    </div>
                )}
                

                <div className="boxs">
                    <span>رنگ ها :</span>
                    <div className='white-box'>
                        
                    </div>
                    <div className='black-box'>
                        
                    </div>
                    <div className='brown-box'>
                        
                    </div>
                </div>

                <div className='des'>
                    <ul>{product.des.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })}
                    </ul>
                </div>

                <div className='add'>
                    <span>تعداد :</span>
                    <div className='quantity'>
                        <button onClick={increaseItemNumber} className='plus-button'>+</button>
                        <span id='itemNumber' className='quantity-value'>{itemNumber}</span>
                        <button onClick={decreaseItemNumber} className='minus-button'>-</button>
                    </div>
                </div>

                <div onClick={() => {addToCart(product.id, itemNumber), window.scrollTo(0, 100)}} className='addtobasket'>
                    <span>اضافه کردن به سبد</span>
                </div>
            </div>
        </div>
    )
}
