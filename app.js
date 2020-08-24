const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch(comando) {

	case 'crear':

		let tarea = toDo.crear(argv.descripcion);
		console.log(tarea);
		break;

	case 'listar':
	    
	    let listado = toDo.getListado();

	    for(let tarea of listado) {
	    	console.log('=====TO DO=========='.green);
	    	console.log(tarea.descripcion);
	    	console.log('Finalizada: ', tarea.completado);
	    	console.log('===================='.green);
	    }

		break;

	case 'actualizar':

		let actualizada = toDo.actualizarTarea(argv.descripcion, argv.completado);

		if (actualizada) {
			console.log('La tarea se ha actualizado correctamente.'.green);
		} else {
			console.log('La tarea no se ha actualizado correctamente.'.red);
		}

		break;

	case 'borrar':

		// let nuevoListado = toDo.filter( tarea => {
		//	return tarea.descripcion !== descripcion
		
		let borrada = toDo.borrarTarea(argv.descripcion);

		if (borrada) {
			console.log('La tarea se ha eliminado correctamente.'.green);
		} else {
			console.log('La tarea no se ha eliminado correctamente.'.red);
		}

		break;

	default:
		console.log('Comando no reconocido');

}