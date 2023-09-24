import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(20).fill("")?.map((v,ind)=>{
            return (
              <>
              <div>
            <div key={ind} className='ml-8 h-48 w-72 mt-20 bg-slate-500 m-2 rounded-3xl'> </div>
            <div className='ml-8 h-4 w-64  bg-slate-500 m-2 rounded-3xl'></div>
            <div className='ml-8 h-4 w-36  bg-slate-500 m-2 rounded-3xl'></div>
            

            </div>
            </>
            )
        })}
    </div>
  )
}

export default Shimmer