const fs = require('fs');

let listaToDo = [];

const guardarDB = () => {

	let data = JSON.stringify(listaToDo);

	fs.writeFile(`database/data.json`, data, (err) => {
  		if (err) throw new Error('No se pudo grabar', err)
	});

}

const cargarDB = () => {

	try {

		listaToDo = require('../database/data.json');
	
	} catch(error) {

		listaToDo = [];

	}

}

const crear = (descripcion) => {

	cargarDB();

	let toDo = {
		descripcion,
		completado: false
	};

	listaToDo.push(toDo);

	guardarDB();

	return toDo;

}

const getListado = () => {

	cargarDB();
	
	return listaToDo;

}

const actualizarTarea = (descripcion, completado = true) => {

	// Cargo la base
	cargarDB();

	// Busco la tarea que me ingresaron
	let index = listaToDo.findIndex(tarea => tarea.descripcion === descripcion);

	if (index >= 0) {
		listaToDo[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}

}

const borrarTarea = (descripcion) => {

	// Cargo la base
	cargarDB();

	// Busco la tarea que me ingresaron y que deseo eliminar
	let index = listaToDo.findIndex(tarea => tarea.descripcion === descripcion);

	if (index >= 0) {
		listaToDo.splice(index, 1);
		guardarDB();
		return true;
	} else {
		return false;
	}

}

module.exports = {
	crear,
	getListado,
	actualizarTarea,
	borrarTarea
}