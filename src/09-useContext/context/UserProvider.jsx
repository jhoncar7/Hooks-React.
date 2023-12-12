import { useState } from "react"
import { UsersContext } from "./UsersContext"


// const user = {
//     id:123,
//     name: 'Jhon',
//     lastName: 'carreño',
//     email:'jhon@gmail.com'
// };



export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UsersContext.Provider value={{ user, setUser }}>
            {children}
        </UsersContext.Provider>
    )
}
