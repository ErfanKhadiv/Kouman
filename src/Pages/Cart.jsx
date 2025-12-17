import React, { useContext } from 'react'
import './CSS/Cart.css'
import { ProductsContext } from '../Context/ProductsContext'
import cross_icon from '../../public/duotone/xmark.svg'

export const Cart = () => {

    const {data, cartItems, removeFromCart, cartItemsNumbers} = useContext(ProductsContext)

    const cartItemsPrice = () => {
        let sum = 0;
        data.map((e) => {
            sum = cartItems[e.id] * e.price + sum
        })
        return sum
    }

    const postPrice = () => {
        if(cartItemsPrice() !== 0){
            return 25000
        }
        return 0
    };

    let count = 0;


    return (
        <div className='cart'>
            <div className='cart-title'>
                <ul>
                    <li>محصول</li>
                    <li>نام محصول</li>
                    <li>قیمت</li>
                    <li>تعداد</li>
                    <li>قیمت نهایی</li>
                    <li>حذف از سبد</li>
                </ul>
                <hr />
            </div>

            <div className='cart-items-box'>
                {data.map((e) => {
                    if (cartItems[e.id] > 0){
                        count++;
                        return  <div>
                                    <div className='cart-items'>
                                        <img className='item-img' src={e.image[0]} alt="" />
                                        <p>{e.name}</p>
                                        <p>{e.price.toLocaleString()}</p>
                                        <p>{cartItems[e.id]}</p>
                                        <p>{(e.price * cartItems[e.id]).toLocaleString()}</p>
                                        <img onClick={() => removeFromCart(e.id)} className='cross-icon' src={cross_icon} alt="" />
                                    </div>
                                    <hr />
                                </div>
                    }
                })}
                {count === 0 && (
                    <div className='empty-basket'>
                        <p>سبد خرید شما خالی است!</p>
                    </div>
                )}
            </div>

            <div className='purchase'>
                <div className='purchase-right'>
                    <span>صورت حساب</span>
                    <hr />
                    <div>
                        <p>قیمت کالاها ({cartItemsNumbers()} عدد)</p>
                        <p className='bold-text'>{cartItemsPrice().toLocaleString()} تومان</p>
                    </div>
                    <div>
                        <p>هزینه ارسال</p>
                        <p className='bold-text'>{postPrice().toLocaleString()} تومان</p>
                    </div>
                    <div>
                        <p>جمع قابل پرداخت</p>
                        <p className='bold-text'>{(cartItemsPrice() + postPrice()).toLocaleString()} تومان</p>
                    </div>
                    <button>پرداخت</button>
                </div>

                <div className='purchase-left'>
                    <span>کد تخفیف</span>
                    <hr />
                    <div>
                        <input type="text" placeholder='کد را وارد کنید'/>
                        <button>تایید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
