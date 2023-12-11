import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        // console.log('Efecto montado');
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('Efecto desMontado');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h1>El usuario ya existe</h1>
            <code>{JSON.stringify(coords)}</code>
        </>
    )
}
