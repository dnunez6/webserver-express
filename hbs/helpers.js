//helpers 

const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {

        //console.log('palabra.charAt(0).toUpperCase() ' + palabra.charAt(0).toUpperCase());
        // console.log('palabra.slice(1).toLowerCase() ' + palabra.slice(1).toLowerCase());
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();


    });
    return palabras.join(' ');
});