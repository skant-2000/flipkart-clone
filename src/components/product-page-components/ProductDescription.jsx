import React from 'react'
import styles from "../../styles/ProductDescription.module.css"
import { BsStarFill } from "react-icons/bs";
import { RiCoupon3Fill } from "react-icons/ri";
import { AiFillTag } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

export default function ProductDescription({ product }) {
  return (
    <div className={styles.main}>
        <p>{product.brand}</p>
        <p>{product.title}</p>
        <p>Special price</p>
        <p>{product.price.raw}</p>
        <div>
            <div>
                {`${product.rating}`} <BsStarFill style={{color: "white"}} />
            </div>
            <div>
                {`${product.ratings_total} ratings`}
            </div>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
        </div>
        <p>Coupons for you</p>
        <p><RiCoupon3Fill style={{color: "rgb(38, 165, 65"}} /> <span style={{fontWeight: "500"}}>Special Price</span> Get extra 20% off upto ₹50 on 1 item(s) (price inclusive of discount)</p>
        <p>Available offers</p>
        <p><AiFillTag style={{color: 'rgb(38, 165, 65)'}} /> Flipkart Pay Later</p>
        <p><AiFillTag style={{color: 'rgb(38, 165, 65)'}} /> <span style={{fontWeight: "500"}}>Partner Offer</span> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*</p>
        <p><AiFillTag style={{color: 'rgb(38, 165, 65)'}} /> <span style={{fontWeight: "500"}}>Bank Offer</span> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above</p>
        <div>
            <div>
                <div><FaMapMarkerAlt style={{color: "rgb(40, 116, 240)"}} /> Deliver to</div>
                <input type="text" placeholder='Bhopal - 462041' readOnly />
                <p>Deliver by Tomorrow</p>
                <p>View Details</p>
            </div>
            <div>
                <div>
                    <p>Services</p>
                </div>
                <div>
                    <p><FaRecycle style={{color: "rgb(40, 116, 240)"}} /> 14 Days Return Policy</p>
                    <p><FaDollarSign style={{color: "rgb(40, 116, 240)"}} /> Cash on Delivery available</p>
                </div>
            </div>
        </div>
    </div>
  )
}
