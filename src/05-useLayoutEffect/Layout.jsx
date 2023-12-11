import { useLayoutEffect, useRef, useState } from "react";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {

    const { increment, counter } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);

    const { episode, name } = !!data && data;

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        // console.log(pRef.current);

        if (pRef.current) {
            const { width, height } = pRef.current.getBoundingClientRect();
            setBoxSize({ width, height })
        }

    }, [name])

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (

                        <div className='alert alert-info text-center'>
                            ...Loading
                        </div>
                    )
                    :
                    (
                        <blockquote
                            className='blockquote text-end'
                            style={{ display: 'flex' }}
                        >
                            <p ref={pRef} className='mb-1'>{name}</p>
                            <footer className='blockquote-footer'>{episode}</footer>
                            <code>{JSON.stringify(boxSize)}</code>
                        </blockquote>
                    )
            }

            <button
                className='btn - btn-primary'
                disabled={isLoading}
                onClick={() => increment()}>Next Episodio</button>
        </>
    )
}
