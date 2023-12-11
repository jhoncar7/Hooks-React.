import { useCounter, useFetch } from '../hooks';

export const MultipleCustomHook = () => {

    const { increment, counter } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);

    const { episode, name } = !!data && data;

    console.log(data);

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
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{name}</p>
                            <footer className='blockquote-footer'>{episode}</footer>
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
