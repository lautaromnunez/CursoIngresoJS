/*function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN */

function mostrar()
{

	let numeroIngresado;
	let contador;
	let suma;
	let promedio;

	contador = 0;

	while(contador<5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado-parseInt(numeroIngresado);
		suma = suma + numeroIngresado;
		// suma += numeroIngresado


		contador = contador + 1;
		//contador = contador + 1;
		// contador +=1
	}
	txtIdSuma.value = suma;
	txtIdPromedio.value = suma/contador
}
