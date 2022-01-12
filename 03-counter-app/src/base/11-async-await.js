
export const getImagen = async() => {

    try {

        const apiKey = 'G7q0AegQAmL2uSLxEQK9Cukt4k9sKFsx';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe';
    }
    
    
}



