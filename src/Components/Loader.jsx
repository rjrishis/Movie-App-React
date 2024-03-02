import React from 'react'
import loader from '../../public/loader.gif'
function Loader() {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
        <img className='w-[25%] h-[25%]'  src={loader} alt="" />
    </div>
  )
}

export default Loader