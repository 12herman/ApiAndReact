import React from 'react'

export default function Deleteconformation({DeleteConformation}) {
  return (
   <>
   <section className='bg-white border w-fit px-10 py-3 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2'>
    <span>Are you sure to delete this details</span>
    <div className='flex justify-around mt-5'>
    <button className='bg-red-500 text-white px-7 py-1' onClick={DeleteConformation}>ok</button>
    <button className='bg-blue-500 text-white px-3 py-1' onClick={DeleteConformation}>cancel</button>
    </div>
   </section>
   </>
  )
}
