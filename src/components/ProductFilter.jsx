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

    useEffect(() => {
        async function getLimitedProducts() {
            const { data: { products } } = await axios.get(`https://dummyjson.com/products?limit=${entriesValue}`)
            setProduct(products)

        }
        getLimitedProducts()

    }, [entriesValue, title, setBrand])


    const filterByCategory = async (e) => {
        setTitle('');
        setBrand('');
        if (e.target.value === 'all') {
            const { data: { products } } = await axios.get(`https://dummyjson.com/products`);
            if (!products) return;
            setProduct(products);
        }
        else {
            const { data: { products } } = await axios.get(`https://dummyjson.com/products/category/${e.target.value}`);
            if (!products) return;
            setProduct(products);
        }





    };
    const filterByTitle = async (e) => {
        e.preventDefault()
        setBrand('');
        const { data: { products } } = await axios.get(`https://dummyjson.com/products/search?q=${title}`);
        if (!products) return;
        console.log(products);
        setProduct(products);

    };
    const filterByBrand = async (e) => {
        setBrand(e.target.value)
        setTitle('');
        const { data: { products } } = await axios.get(`https://dummyjson.com/products/search?q=${brand}&limit=${entriesValue}`);
        if (products === []) return;
        setProduct(products);
        console.log(products)
    };




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
                <form onSubmit={filterByTitle}>
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} name='firstName' type="text" placeholder='Search by title' className='border rounded outline-none p-1 mx-1' />
                </form>

                <input required value={brand} onChange={(e) => filterByBrand(e)} name='email' type="text" placeholder='Search by brand' className='border rounded outline-none p-1 mx-1' />

                <label htmlFor="category">Category:</label>
                <select defaultValue='all' onChange={(e) => filterByCategory(e)} name="category" id="category" className='border p-1 rounded mx-2'>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>


            </div>
            <DataTable perPage={entriesValue} data={product} filterId={searchValue} />
        </main>

    )
}

export default ProductFilter