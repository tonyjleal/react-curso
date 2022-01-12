// Desestructuración o Asignación Desectructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};


const usedContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.123,
            lng: -12.2323
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = usedContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);