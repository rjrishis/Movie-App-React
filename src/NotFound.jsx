import React from 'react'
// import loader from '../../public/loader.gif'
import four from '../public/four.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
        <Link
          className=" hover:text-[#6556cd] text-white text-2xl absolute left-[5%] top-[5%] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
        <img className='w-[40%] h-[50%]'  src={four} alt="" />
    </div>
  )
}

export default NotFound