import { useCallback, useState } from "react";
// import { useCounter } from "../hooks/useCounter"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    // const { counter, increment } = useCounter(10);
    const [counter, setCounter] = useState(120)

    const incrementFather = useCallback(() => {
        setCounter(v => v + 1);
    },
        [],
    )


    return (
        <>
            <h1>useCallBack hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
