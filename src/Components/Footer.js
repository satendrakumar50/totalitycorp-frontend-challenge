import React from 'react'

const Footer = () => {
 
  return ( 
    <div className='mt-2 h-full w-full bg-black  '>
      <div className='   h-96 w-96 '>
        <div className=' flex justify-between '>
        <div className='text-white font-bold text-lg pl-96'>
          <ul  className='text-xs'>
            <li className='font-serif text-lg mb-2 '>Company</li>
            <li className='mb-2' >About</li>
            <li className='mb-2'>Carrers</li>
            <li className='mb-2'>Team</li>
            <li className='mb-2' >Swiggy One</li>
            <li className='mb-2'>Swiggy Instamart</li>
            <li className='mb-2' >Swiggy Genie</li>
          </ul>
          </div>
          <div className='text-white font-bold text-lg pl-14 ml-20 mr-20'>
          <ul className='text-xs'>
            <li className='font-serif text-lg mb-2'> ContactUs</li>
            <li className='mb-2'>Help and Support</li>
            <li className='mb-2'>Partner with us</li>
            <li className='mb-2'>Ride with us</li>
            
          </ul>
        
            <div className='text-white font-bold text-lg'>
              <ul className='text-xs'>
           <li className='font-serif text-lg mb-2 mt-11'>Legal</li>
           <li className='mb-2'>Terms & Conditions</li>
           <li className='mb-2'>Cookie Policy</li>
           <li className='mb-2'>Privacy Policy</li>
           </ul>
           </div>
           </div>
          <div className='text-white font-bold text-lg  pl-14 pr-2'>
          <ul className='text-xs ' >
          <li className='font-serif text-lg  mb-2'>WeDeliverTo:</li>
          <li className='mb-2'>Varanasi</li>
          <li className='mb-2'>Bangalore</li>
          <li className='mb-2'>Gurgao</li>
          <li className='mb-2'>Hyderabad</li>
          <li className='mb-2'>Delhi</li>
          <li className='mb-2'>Mumbai</li>
          <li className='mb-2'>Pune</li>
          </ul>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer