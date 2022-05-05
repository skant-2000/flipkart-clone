import React, { useState } from 'react'
import flipkart from "../images/navbar-images/flipkart.png"
import plus from "../images/navbar-images/plus.png"
import styles from "../styles/Navbar.module.css"
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { SearchInputValue } from '../redux/action';
import { useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate()

    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch()

    const handleSearchClick = () => {
        dispatch(SearchInputValue(searchInput))
        navigate(`/${searchInput}`)
    }

    const redirectToHome = () => {
        navigate("/")
    }

  return (
    <div className={styles.navbar}>
        <div>
            <div className={styles.brand} onClick={redirectToHome}>
                <div>
                    <img src={flipkart} alt="" />
                </div>
                <div>
                    <p>
                    <i style={{color: "white"}}>Explore</i> <i style={{color: "rgb(255, 229, 0)"}}>Plus</i>
                    </p>
                    <img src={plus} alt="plus" />
                </div>
            </div>
            <input type="text" placeholder='Search for products, brands and more' onChange={(e) => setSearchInput(e.target.value)} />
            <button onClick={handleSearchClick}><ImSearch style={{color: "rgb(40, 116, 240)", marginTop: "4px"}} /></button>
            <button>Login</button>
            <div>Become a Seller</div>
            <div>More</div>
            <div>
                <div>
                <MdShoppingCart />
                </div>
                cart
            </div>
        </div>
    </div>
  )
}
