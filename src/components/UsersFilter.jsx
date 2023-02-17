import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { BiSearch } from 'react-icons/bi'

const UsersFilter = () => {
    const [users, setUsers] = useState()
    const [entriesValue, setEntriesValue] = useState(5)
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        async function getLimitedUsers() {
            let res = await axios.get(`https://dummyjson.com/users?limit=${entriesValue}`)
            let { users } = await res.data
            setUsers(users)

        }
        getLimitedUsers()

    }, [setUsers, entriesValue])

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
                <span className='mx-3 border-x border-grey px-3 flex gap-2'>
                    <BiSearch className=' text-grey cursor-pointer hover:' size={25} onClick={() => setShowSearch(true)} />
                    {showSearch && <input type='number' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search by ID' />}
                </span>
            </div>
            <DataTable perPage={entriesValue} data={users} filterId={searchValue} />
        </main>

    )
}

export default UsersFilter