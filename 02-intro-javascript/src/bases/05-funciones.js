

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4('Goku'));



const getUser = () => {
    return {
        uid: 'ABCDE',
        username: 'Vegeta_User123',
    }
};

const getUser2 = () => ({
    uid: 'ABCDE',
    username: 'Vegeta_User1234'
});

console.log(getUser());
console.log(getUser2());

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABCD5678',
        username: nombre
    }
};

// 1. Transformar a función de fecha
const getUsuarioActivo2 = (nombre) => {
    return {
        uid: 'ABCD5678',
        username: nombre
    }
};

// 2. retornar objeto implìcito
const getUsuarioActivo3 = (nombre) => ({
    uid: 'ABCD5678',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Fernando');
const usuarioActivo2 = getUsuarioActivo2('Fernando');
const usuarioActivo3 = getUsuarioActivo3('Fernando');


console.log(usuarioActivo);
console.log(usuarioActivo2);
console.log(usuarioActivo3);


