const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        data += '=============================\n'.green;
        data += `tabla de ${base}\n`.green;
        data += '=============================\n'.green;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    })
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}