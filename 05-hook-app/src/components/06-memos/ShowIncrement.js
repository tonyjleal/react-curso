import React, { memo } from 'react'

const ShowIncrement = ({increment}) => {

    console.log('I have been rendered');

    return (
        <div>
            <button
            className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}>
                Incrementar
            </button>
        </div>
    )
}

export default memo(ShowIncrement);