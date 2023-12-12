import { useContext } from "react";
import { UsersContext } from "./context/UsersContext";

export const HomePage = () => {

    const { user } = useContext(UsersContext);

    return (
        <>
            <h1>HomePage <small>{user?.name}</small></h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
