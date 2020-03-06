// requireds
const argv = require(`./config/yargs`).argv;
const colors = require('colors/safe');



// let data = ``;
// let base = 6;

// for (let i = 1; i <= 10; i++) {
//     data += `${base}*${i}= ${base*i} \n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;

//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// })

const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);


let comando = argv._[0];

switch (comando) {
    case `listar`:
        listarTabla(argv.base, argv.limite);
        break;
    case `crear`:
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`Comando no reconocido`);
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);