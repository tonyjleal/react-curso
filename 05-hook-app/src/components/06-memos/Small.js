import React, { memo } from 'react'

const Small = ({ value }) => {

    console.log('I have been called');
    return (
        <small>
            { value }
        </small>
    );
}

export default memo(Small);