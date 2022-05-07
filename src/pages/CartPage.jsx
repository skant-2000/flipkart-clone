import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate } from "react-router-dom"
import styles from "../styles/CartPage.module.css"

export default function CartPage() {

    const navigate = useNavigate()

    const [cp, setCp] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [count, setCount] = useState([])

    const { cart } = useSelector(store => store)

    useState(() => {
        setCp(cart)
    }, [])

    const handleDecrease = (id) => {
        let x = cp.map(item => item.product.asin === id ? item.quantity -= 1 : item.quantity)
        setCount(x)
    }

    const handleIncrease = (id) => {
        let x = cp.map(item => item.product.asin === id ? item.quantity += 1 : item.quantity)
        setCount(x)
    }

    useEffect(() => {
        let totalprice = 0
        for ( let i = 0; i < cp.length; i++ ) {
            totalprice += cp[i].quantity*cp[i].product.price.value
        }
        setTotalPrice(totalprice)
    }, [count, cp])

    const placeOrder = () => {
        alert("Your Order has been placed")
        navigate('/')
    }

    const remove = (id) => {
        let newCp = cp.filter(item => item.product.asin !== id )
        setCp(newCp)
    }

    return (
        <div className={styles.main}>
            <div>
                <div>
                    <div>
                        {`My Cart (${cp.length})`}
                    </div>
                    <div>
                        Deliver to: <span>Bhopal - 462041</span>
                    </div>
                    <button>Change</button>
                </div>
                <div className={styles.cartList}>
                    {
                        cp.map((item) => {
                            return (
                                <div key={item.product.asin}>
                                    <div>
                                        <div>
                                            <img src={item.product.image} alt="" />
                                        </div>
                                        <div>
                                            <button onClick={() => handleDecrease(item.product.asin)}>-</button>
                                            <div>{item.quantity}</div>
                                            <button onClick={() => handleIncrease(item.product.asin)}>+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{item.product.title}</p>
                                        <p>Seller:SuperComNet</p>
                                        <p>{item.product.price.raw}</p>
                                        <button onClick={() => remove(item.product.asin)}>Remove</button>
                                    </div>
                                    <div>
                                        <p>{item.product.delivery.tagline}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.placeOrder}>
                    <button onClick={placeOrder}>Place Order</button>
                </div>
            </div>
            <div className={styles.price}>
                <div>
                    <p>PRICE DETAILS</p>
                </div>
                <div>
                    <div>Price{` (${cp.length}) item`}</div>
                    <div>{`$${totalPrice.toFixed(2)}`}</div>
                </div>
                <div>
                    <div>Discount</div>
                    <div>-$10</div>
                </div>
                <div>
                    <div>Total Amount</div>
                    <div>{(totalPrice - 10).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}
