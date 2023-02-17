import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center pt-10'>
            <h1 className='text-[32px]'>
                Welcome to ASTUDIO Assessment
            </h1>
            <Link to='/products' className='p-2 bg-blue rounded hover:bg-black hover:text-grey duration-500 transition-all'>
                Check our products
            </Link>
        </div>
    )
}

export default Home