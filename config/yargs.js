const descripcion = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Descripción de la tarea por hacer'
	}
}

const completado = {
	completado: {
		default: true,
		alias: 'c',
		desc: 'Marca la tarea como completada o pendiente'
	}
}

const argv = require('yargs')
				.command('crear', 'Crea una tarea TO DO', descripcion)
				.command('actualizar', 'Actualiza el estado de una tarea a completado', {descripcion, completado})
				.command('borrar', 'Elimina la tarea con la descripcion ingresada', descripcion)
				.command('listar', 'Lista todas las tareas pendientes y por hacer', {})
				.help()
				.argv;

module.exports = {
	argv
}