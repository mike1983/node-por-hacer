const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer); // esta funcion es para convertir el array en un formato json
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        else
            console.log('El archivo ha sido guardado');
    })
}
let listado = () => {
    cargarDB();
    return listadoPorHacer;
}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB()
        return true;
    } else {
        return false;
    }
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else
        return false;
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }

}
const crear = (descripcion) => {
    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}
module.exports = {
    crear,
    listado,
    actualizar,
    borrar
}