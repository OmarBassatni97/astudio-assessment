import { createContext, useState } from "react";

const UsersStore = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState({})
    return (
        <UsersStore.Provider value={{ users, setUsers }}>{children}</UsersStore.Provider>
    )
}

export { UsersStore, UserProvider }