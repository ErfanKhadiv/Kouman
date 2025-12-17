import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsContext'
import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'

export const Accessory = () => {

    let {data} = useContext(ProductsContext)
    let accessory_data = data.filter((item) => item.category === "accessory")

    return (
        <div>
            <ProductsDisplay title={"اکسسوری"} products={accessory_data} />
        </div>
    )
}
