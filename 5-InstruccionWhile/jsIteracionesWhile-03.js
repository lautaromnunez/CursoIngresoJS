/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("ingrese el número clave.")
	}
	alert("Usted esta dentro del sistema");
	
}//FIN DE LA FUNCIÓN
