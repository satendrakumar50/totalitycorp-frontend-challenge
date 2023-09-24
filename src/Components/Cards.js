import React from 'react'
import { IMG_CDN_URL } from './Constant'
import { useDispatch } from 'react-redux'
import {addItem} from '../Utiles/cartSlice'
import { clearItem } from '../Utiles/cartSlice'



const Cards = ({name,cloudinaryImageId,cuisines,locality,costForTwo,})=>{
    const dispatch = useDispatch();
   const handleAddItem =()=>{
          dispatch(addItem())   
   }
   //const dispatch = useDispatch();
   const handleclearItem =()=>{
          dispatch(clearItem())   
   }
  return (
    <div  className='  ml-18    m-2   '>
    <div className='  overflow-clip  hover:shadow-none  h-80 w-80 mt-2 shadow-xl' >
    <img  className='h-48 w-72 pl-1 pt-1 rounded-3xl ml-3' alt=""  src={IMG_CDN_URL+cloudinaryImageId}/>
     <h1 className='font-bold hover:underline  ml-7' >{name}</h1>
     <div className='flex  '>
     <h1 className='text-sm ml-7'>Price: {costForTwo}</h1>
     <button  onClick={()=>{ handleAddItem() }}   className='text-sm ml-7 bg-green-50  flex justify-end  '>Add</button>
     <button  onClick={()=>{ handleclearItem() }}   className='text-sm ml-7 bg-green-50  flex justify-end  '>Clear</button>
     </div>
     <h2 className=' flex text-wrap     text-sm  w-8 font-mono ml-7 ' >{cuisines.join(",")}</h2>
     <h1 className='text-sm ml-7'>Locality: {locality}</h1>
     </div>
     </div> 
  )
}

export default Cards