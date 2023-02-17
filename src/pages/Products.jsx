import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'

const Products = () => {
  const [products, setProducts] = useState()

    useEffect(() => {
        async function getProducts() {
            let res = await axios.get('https://dummyjson.com/products?limit=5')
            let { products } = await res.data
            setProducts(products)

        }
        getProducts()

    }, [setProducts])




    return (

        <DataTable data={products} />

    )
}

export default Products