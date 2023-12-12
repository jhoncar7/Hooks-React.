import { useContext } from "react"
import { UsersContext } from "./context/UsersContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UsersContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                onClick={() => setUser({
                    id: 12345,
                    name: 'juan',
                    email: 'juan@gmail.com'
                })}
                className="btn btn-primary mt-3"
            >
                Establecer Usuario
            </button>
        </>
    )
}
