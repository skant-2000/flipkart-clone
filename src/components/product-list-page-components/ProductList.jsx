import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../../styles/ProductList.module.css"
import { useNavigate } from "react-router-dom"
import { setIndividualItem } from '../../redux/action'

export default function ProductList() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { searchInputValue, searchedItem, rangeFilterValue } = useSelector(state => state)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(searchedItem)
  }, [searchedItem])

  useEffect(() => {
    if ( searchedItem ) {
      let rangeFilter = searchedItem.filter((item) => (item.price.value >= rangeFilterValue[0] && item.price.value <= rangeFilterValue[1]))
      setProducts(rangeFilter)
    }
  }, [rangeFilterValue, searchedItem])
  
  const lowToHigh = () => {
    const getValue = ({ price }) => +price.value;
    let sorted = products.sort((a,b) => getValue(a) - getValue(b))
    localStorage.setItem("localSorted", JSON.stringify(sorted));
    let localStorageSortedItem = JSON.parse(localStorage.getItem("localSorted"))
    setProducts(localStorageSortedItem)
  }

  const highToLow = () => {
    const getValue = ({ price }) => +price.value;
    let sorted = products.sort((a,b) => getValue(b) - getValue(a))
    localStorage.setItem("localSorted", JSON.stringify(sorted));
    let localStorageSortedItem = JSON.parse(localStorage.getItem("localSorted"))
    setProducts(localStorageSortedItem)
  }

  const relevence = () => {
    const getValue = ({ position }) => +position;
    let sorted = products.sort((a,b) => getValue(a) - getValue(b))
    localStorage.setItem("localSorted", JSON.stringify(sorted));
    let localStorageSortedItem = JSON.parse(localStorage.getItem("localSorted"))
    setProducts(localStorageSortedItem)
  }

  const handleIndividualProduct = (data) => {
    dispatch(setIndividualItem(data))
    navigate(`/${searchInputValue}/${data.position}`)
  }

  return (
    <>{products ? (
      <div className={styles.main}>
        <div>
          {`Showing 1 - ${products.length} for "${searchInputValue}"`}
        </div>
        <div>
          <div>Sort By</div>
          <div onClick={relevence}>Relevance</div>
          <div onClick={lowToHigh}>Price - Low to High</div>
          <div onClick={highToLow}>Price - High to Low</div>
        </div>
        <div className={styles.prod}>
          {products.map((product) => {
            return (
              <div key={product.position} onClick={() => handleIndividualProduct(product)}>
                <div>
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <p>{product.brand}</p>
                  <p>{product.title}</p>
                  {product.price ? (<p>{product.price.raw}</p>) : null}
                  {product.rating ? (<p>Rating : {product.rating} ⭐</p>) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ) : <h1 style={{margin: "auto"}}>Fetching...</h1>}</>
  )
}
