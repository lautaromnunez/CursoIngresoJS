/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosF;
    let gradosC;

    gradosF = document.getElementById("txtIdTemperatura").value;
    gradosF = parseFloat(gradosF);
    gradosC = (gradosF - 32) * (5/9);

    alert( gradosF +" Fahrenheit son " +gradosC+ " centígrados");


}

function CentigradosFahrenheit () 
{
	let gradosF;
    let gradosC;

    gradosC = document.getElementById("txtIdTemperatura").value;
    gradosC = parseFloat(gradosC);
    gradosF = (gradosC * 9/5) + 32;

    alert( gradosC +" Centigrados son " +gradosF+ " Fahrenheit");
}
