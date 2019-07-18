const descripcion = {
    demand: true,
    alias: 'd'
}; // lo simplifique solo para algunos comandos solo para probar
const argv = require('yargs').command('crear', 'Crea un elemento por hacer!', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;
module.exports = {
    argv
}