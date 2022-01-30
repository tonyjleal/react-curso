import React, { useMemo, useState } from 'react'
import { processLazy } from '../../helpers/processLazy';
import { useCounterMultiple } from '../../hooks/useCounterMultiple'
import '../02-useEffect/effects.css'



export const MemoHook = () => {

    const {counter, increment} = useCounterMultiple(5000);
    const [show, setShow] = useState(true);


    const memoProcessLazy = useMemo(() => processLazy(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small></h3>

            <hr/>

            <p>{ memoProcessLazy }</p>

            <button
            className='btn btn-primary'
            onClick={ increment }>
                +1
            </button>

            <button
                className='btn btn-outline-primary ms-3'
                onClick={() => {
                    setShow(!show);
                }}
                >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}

