/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
/*{
	let sueldo 
	let resultado
	
	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo)

	resultado = sueldo - (sueldo *0.25)
	
	document.getElementById("txtIdResultado").value= resultado;
}*/


{
	let importe
	let descuento
	let descuentoCalculado
	let importeconDescuento
	
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	descuento = prompt("Ingresar descuento");
	descuentoCalculado = (importe * descuento / 100);
	importeconDescuento = (importe - descuentoCalculado) 
	
	document.getElementById("txtIdResultado").value= importeconDescuento;
}
