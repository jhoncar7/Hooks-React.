import { useContext } from "react";
import { UsersContext } from "./context/UsersContext";

export const AboutPage = () => {

    const { user } = useContext(UsersContext);

    return (
        <>
            <h1>AboutPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
