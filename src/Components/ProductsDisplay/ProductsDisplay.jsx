import {Items} from '../Items/Items'
import './ProductsDisplay.css'

export const ProductsDisplay = (props) => {

    let data = props.products;
    let title = props.title;

    return (
        <div className='products-box'>
            <h2>{title}</h2>
            <div className='products-display'>
                {data.map((item, i) => {
                    return <Items
                            key={i}
                            id={item.id}
                            name={item.name}
                            image1={item.image?.[1] || item.image?.[0]}
                            image2={item.image?.[0]}
                            price={item.price_display}
                            />
                })}
            </div>
        </div>
    )
}
