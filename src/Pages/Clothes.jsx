import React, {useContext} from 'react'
import { Banners } from '../Components/Banners/Banners'
import {ProductsDisplay} from '../Components/ProductsDisplay/ProductsDisplay'
import { ProductsContext } from '../Context/ProductsContext'

export const Clothes = () => {

    let {data} = useContext(ProductsContext)
    let clothes_data = data.filter((item) => item.category === 'clothes')

    return (
        <div>
            <ProductsDisplay title={"تیشرت ها"} products={clothes_data}/>
        </div>
    )
}
