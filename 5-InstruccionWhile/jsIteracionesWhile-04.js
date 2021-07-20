/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número.");

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("Error, vuelva a ingresar un número.");
	}
	txtIdNumero.value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN