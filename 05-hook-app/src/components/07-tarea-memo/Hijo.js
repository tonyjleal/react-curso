import React, { memo } from 'react'

const Hijo = ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary ms-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}

export default memo(Hijo)
