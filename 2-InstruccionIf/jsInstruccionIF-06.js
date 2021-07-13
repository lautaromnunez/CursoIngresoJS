/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)
	if(edad >17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad > 12 && edad <18)
		{
			alert("Usted es adolescente");
		}
		else
		{
		  alert("Usted es menor de edad");
		}
	}


}//FIN DE LA FUNCIÓN 