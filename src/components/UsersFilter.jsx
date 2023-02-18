import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { BiSearch } from 'react-icons/bi'

const UsersFilter = () => {
    const [user, setUser] = useState()
    const [entriesValue, setEntriesValue] = useState(5)
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [firstName, setFirstName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        async function getLimitedUsers() {
            const { data: { users } } = await axios.get(`https://dummyjson.com/users?limit=${entriesValue}`)
            setUser(users)

        }
        getLimitedUsers()

    }, [entriesValue, firstName])

    const filterByName = async (e) => {
        e.preventDefault()
        setGender('')
        setEmail('')
        const { data: { users } } = await axios.get(`https://dummyjson.com/users/filter?key=firstName&value=${firstName}`)
        if (!users) return;
        setUser(users);


    }
    const filterByGender = async (e) => {
        e.preventDefault();
        setFirstName('');
        setEmail('');
        const { data: { users } } = await axios.get(`https://dummyjson.com/users/filter?key=gender&value=${gender}`);
        if (!users) return;
        setUser(users);

    };
    const filterByEmail = async (e) => {
        e.preventDefault();
        setFirstName('');
        setGender('');
        const { data: { users } } = await axios.get(`https://dummyjson.com/users/filter?key=email&value=${email}`);
        if (!users) return;
        setUser(users);

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
                <form onSubmit={filterByName}>
                    <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' type="text" placeholder='Search by name' className='border rounded outline-none p-1 mx-1' />
                </form>
                <form onSubmit={filterByEmail}>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="text" placeholder='Search by email' className='border rounded outline-none p-1 mx-1' />
                </form>
                <form onSubmit={filterByGender}>
                    <input required value={gender} onChange={(e) => setGender(e.target.value)} name='gender' type="text" placeholder='Search by gender' className='border rounded outline-none p-1 mx-1' />
                </form>

            </div>
            <DataTable perPage={entriesValue} data={user} filterId={searchValue} />
        </main>

    )
}

export default UsersFilter