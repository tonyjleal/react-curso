export const processLazy = ( iterations ) => {
    for(let i = 0; i < iterations; i++) {
        console.log('iterando');
    }
    
    return `${iterations} iteraciones realizadas`
}
