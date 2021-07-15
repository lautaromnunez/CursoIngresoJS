/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

/*
julio y agosto -> "Abrigate que hace frio"
septiembre - octubre - noviembre -> "Ya pasamos el frio"
diciembre - enero- febrero -> "Ya pasamos el frio, ahora hace calor"
marzo - abril - mayo - junio -> "Falta para el inveirno"
*/




function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño= document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "falta para el invierno."
		break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio."
		break;
		default:
			mensaje="Ya pasamos el frio, ahora hace calor."
		break;
	}
	alert(mensaje);
	




}//FIN DE LA FUNCIÓN