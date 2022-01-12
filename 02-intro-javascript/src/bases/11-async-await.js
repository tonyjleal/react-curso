
//const getImagenPromesa = () => new Promise(resolve => resolve('https://ajsafd.com'));

const getImagen = async () => {

    try {
        const apiKey = 'h9FjI51pNepQqrYxPo7MROFYyOF7yZgz';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement('img');

        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImagen().then(console.log)





// peticion
//     .then(response => response.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn)