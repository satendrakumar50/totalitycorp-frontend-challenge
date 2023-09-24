import React from 'react'
import { useSelector } from 'react-redux'
//import store from '../Utiles/store'
const Cart = () => {
    
  const cartAddItem = useSelector((store)=>store.cart.item);
  console.log(cartAddItem);
  return (
    <div className='mb-96 m-2  text-3xl font-serif font-bold'>Cart:{cartAddItem.length}</div>
  )
}

export default Cart