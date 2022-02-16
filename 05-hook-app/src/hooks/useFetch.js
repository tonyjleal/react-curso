import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data:null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {

        setState({data:null, loading: true, error: null})

        fetch(url)
            .then( res => res.json() )
            .then( data => {
                if(isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    });
                } else {
                    console.log('setState wasn\'t call');
                }
            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            });
    },[url]);

    return state;

    //const `https://www.breakingbadapi.com/api/quotes/${id}`


}
