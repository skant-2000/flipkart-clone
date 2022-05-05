import React from 'react'
import { useSelector } from 'react-redux'

export default function CartPage() {

    const { cart } = useSelector(store => store)

    console.log(cart)

  return (
    <div>CartPage</div>
  )
}
