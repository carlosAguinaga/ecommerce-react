import React from 'react'
import { useParams } from 'react-router'
import './ProductDetail.styles.css'

const ProductDetail = () => {

    const {id} = useParams()
    return (
        <div>
            <h2>Detalle del producto {id}</h2>
        </div>
    )
}

export default ProductDetail
