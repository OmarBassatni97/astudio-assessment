import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { BiSearch } from 'react-icons/bi'

const ProductFilter = () => {
    const [product, setProduct] = useState()
    const [entriesValue, setEntriesValue] = useState(5)
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        async function getLimitedProducts() {
            const { data: { products } } = await axios.get(`https://dummyjson.com/products?limit=${entriesValue}`)
            setProduct(products)

        }
        getLimitedProducts()

    }, [entriesValue])




    return (

        <main className='p-10'>
            <div className='flex py-10 items-center'>
                <select onChange={(e) => setEntriesValue(e.target.value)} name="page-size" id="size">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                <span>Entries</span>
                <span className='mx-3 border-x border-grey px-3 flex gap-2 items-center'>
                    <BiSearch className=' text-grey cursor-pointer hover:text-black' size={25} onClick={() => setShowSearch(!showSearch)} />
                    {showSearch && <input className='outline-none border rounded p-1' type='number' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search by ID' />}
                </span>
                <form >
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} name='firstName' type="text" placeholder='Search by title' className='border rounded outline-none p-1 mx-1' />
                </form>
                <form >
                    <input required value={brand} onChange={(e) => setBrand(e.target.value)} name='email' type="text" placeholder='Search by brand' className='border rounded outline-none p-1 mx-1' />
                </form>

                <select value={category} onChange={(e)=> setCategory(e.target.value)} name="category" id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                </select>
            </div>
            <DataTable perPage={entriesValue} data={product} filterId={searchValue} />
        </main>

    )
}

export default ProductFilter