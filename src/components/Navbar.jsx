import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full h-[80px] bg-blue'>
            <nav className='max-w-[1440px] h-full flex justify-between mx-auto items-center px-2'>
                <span className='text-[20px] uppercase'>
                    Astudio
                </span>
                <div className='flex gap-8'>
                    <Link to='/' className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Home</Link>
                    <Link to='/users' className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Users</Link>
                    <Link to='/products' className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Products</Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar