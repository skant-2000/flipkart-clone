import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/product-list-page-components/Filter'
import ProductList from '../components/product-list-page-components/ProductList'
import { fetchSearchedItem } from '../redux/action'

export default function ProductListPage() {

    const { searchInputValue } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:8080/${searchInputValue}`)
        .then(res => res.json())
        .then(data => dispatch(fetchSearchedItem(data)))
    }, [searchInputValue])

  return (
    <div style={{display: "flex"}}>
        <Filter />
        <ProductList />
    </div>
  )
}
