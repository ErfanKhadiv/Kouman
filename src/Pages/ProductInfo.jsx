import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsContext'
import { useParams } from 'react-router'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import {ProductPage} from '../Components/ProductPage/ProductPage'

export const ProductInfo = () => {

    const {data} = useContext(ProductsContext);
    const {productId} = useParams();
    const product = data.find((e) => e.id === Number(productId))

    return (
        <div>
            <Breadcrumbs product={product}/>
            <ProductPage product={product}/>
        </div>
    )
}
