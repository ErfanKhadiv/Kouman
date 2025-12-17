import React, { useContext } from 'react'
import './CSS/MainPage.css'
import { Banners } from '../Components/Banners/Banners'
import { ProductsDisplay } from '../Components/ProductsDisplay/ProductsDisplay'
import { ProductsContext } from '../Context/ProductsContext'


export const MainPage = (props) => {

    let {data} = useContext(ProductsContext)

    return (
        <div>
            <Banners banner={props.banner}/>
            <ProductsDisplay title={"محصولات"} products={data}/>
        </div>
    )
}
