/** propiedad innerHTMl **/
function cambiaTitulo(){
	let titulo=document.getElementById("titulo");
	titulo.innerHTML = "Título NUEVO";
}
/** atributos html: ej. src o value **/
function cambiaImagen(){
	document.getElementById("imagen").src = "https://estaticos.muyhistoria.es/uploads/images/pyr/57036af75cafe801f93c0be9/c-don-quijote-mancha_0.jpg";
}
function cambiaValor(){
	document.getElementById("usuario").value="admin";
}
/** propiedades css ( se pone .style )  **/
function cambiaColor(){
	let titulo=document.getElementById("titulo");
	titulo.style.color = "red";
	titulo.style.backgroundColor = "yellow";
	titulo.style.fontSize = "4em";
	titulo.style.border = "2px solid red";
}
function ocultaImagen(){
	document.getElementById("imagen").style.display = "none";
}
/** aplicar una clase a un elemento  **/
function aplicaClase(){
	let titulo=document.getElementById("titulo2");
	titulo.className = "importante";
}
/** Escribir nuevo HTML  **/
function nuevoHTML(){
	document.write("<h1>Nuevo HTML</h1>");
}

function cambiaIdioma(){
	let miSelect=document.getElementById("idioma");
	let titulo=document.getElementById("titulo");
	if ( miSelect.value=="en" ) {
		titulo.innerHTML = "New Title";
	} else {
		titulo.innerHTML = "Nuevo Título";
	}
}