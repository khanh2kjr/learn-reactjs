import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selectors'

export default function CartFeature() {
  const cartTotal = useSelector(cartTotalSelector)

  return <div>Cart total: {cartTotal}</div>
}
