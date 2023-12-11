import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        // const onInputChange = (event) => {
        // console.log(event.target);
        // console.log(event.target.value);

        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        });

    }

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="jhon@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                username == 'jhon' && <Message />
            }

        </>
    )
}
