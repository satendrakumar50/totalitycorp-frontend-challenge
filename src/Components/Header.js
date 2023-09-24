import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => { 
  const cartAddItem = useSelector((store)=>store.cart.item);
//console.log(cartAddItem);

  return (
    <div className=' sticky top-0  p-2 flex flex-wrap  justify-between bg-slate-50 shadow-2xl'>
   <Link to="/"> <img className='  h-12 w-14 ' alt='img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png"/></Link>
    <div className='pr-16 '>
        <ul className=' flex flex-wrap  ' >
          <Link to="/home" ><li className='p-4 hover:underline'>Home</li></Link>
           <Link to="/offer"> <li className='p-4 hover:underline '>Offer</li></Link>
           <Link to="/about"> <li className='p-4 hover:underline'>About</li></Link>
           <Link to="/cart">
            <li className='p-4 hover:underline' >Cart-{cartAddItem.length} </li>
            </Link> 
        </ul>
        </div>
    </div>
  )
}

export default Header