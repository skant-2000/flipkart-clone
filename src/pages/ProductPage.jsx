import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageDiv from '../components/product-page-components/ImageDiv'
import ProductDescription from '../components/product-page-components/ProductDescription'
import styles from "../styles/ProductPage.module.css"


export default function ProductPage() {

    const { individualItem } = useSelector(store => store)

    const [product, setProduct] = useState(null)

    useEffect(() => {
        setProduct(individualItem)
    }, [])


  return (
    <div style={{backgroundColor: "rgb(241, 243, 246)"}}>
        { product ? (
            <div className={styles.prod}>
                <ImageDiv product={product} />
                <ProductDescription product={product} />
            </div>
        ) : (
            <div>
                <h1>Select some product</h1>
                <Link to="/">Go To Homepage</Link>
            </div>
        ) }
    </div>
  )
}
