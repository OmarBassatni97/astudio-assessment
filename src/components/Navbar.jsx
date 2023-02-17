import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[80px] bg-blue'>
            <nav className='w-[1440px] h-full flex justify-between mx-auto items-center'>
                <span className='text-[20px] uppercase'>
                    Astudio
                </span>
                <div className='flex gap-8'>
                    <span className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Home</span>
                    <span className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Users</span>
                    <span className='text-[15px] uppercase font-normal cursor-pointer hover:text-grey duration-300'>Products</span>
                </div>

            </nav>
        </div>
    )
}

export default Navbar