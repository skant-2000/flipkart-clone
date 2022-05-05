import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styles from "../../styles/ImageDiv.module.css"
import { MdShoppingCart } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';

export default function ImageDiv({ product }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = () => {
        dispatch(addToCart({
            product,
            quantity: 1
        }))
        navigate('/cart')
    }

  return (
    <div className={styles.main}>
        <div>
            <img src={product.image} alt="" />
        </div>
        <div>
            <button onClick={handleAddToCart}><MdShoppingCart /> ADD TO CART</button>
            <button><BsLightningFill /> BUY NOW</button>
        </div>
    </div>
  )
}
