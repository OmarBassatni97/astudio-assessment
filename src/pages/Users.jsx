import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'
// import { UserProvider, UsersStore } from '../store/UsersStore'

const Users = () => {
    // const { users, setUsers } = useContext(UsersStore)
    const [users, setUsers] = useState()

    useEffect(() => {
        async function getUsers() {
            let res = await axios.get('https://dummyjson.com/users?limit=5')
            let { users } = await res.data
            setUsers(users)

        }
        getUsers()

    }, [setUsers])




    return (

        <DataTable data={users} />

    )
}

export default Users