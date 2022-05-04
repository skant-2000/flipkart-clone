import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "../../styles/ProductList.module.css"

export default function ProductList() {

  const { searchInputValue } = useSelector(state => state)

  const { searchedItem } = useSelector(store => store)

  const [products, setProducts] = useState([])

  // DEMO
//   useEffect(() => {
//     fetch(`http://localhost:8080/watch`)
//     .then(res => res.json())
//     .then(data => setProducts(data))
// }, [rel])
// .....

  useEffect(() => {
    setProducts(searchedItem)
  }, [searchedItem])
  
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
    // e.preventDefault
    console.log(data)
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ) : null}</>
  )
}
