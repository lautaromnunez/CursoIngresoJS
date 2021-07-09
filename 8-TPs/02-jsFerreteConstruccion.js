/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largodelTerreno 
    let anchodelTerreno
    let cantidadAlambre

    largodelTerreno = document.getElementById("txtIdLargo").value;
    largodelTerreno = parseFloat(largodelTerreno)
    anchodelTerreno = document.getElementById("txtIdAncho").value;
    anchodelTerreno = parseFloat(anchodelTerreno)
    perimetro = (largodelTerreno *2) + (anchodelTerreno *2)
    cantidadAlambre = perimetro * 3 

    alert("La cantidad de alambre que hay que comprar es " +cantidadAlambre+ " metros")

}
function Circulo () 
{
	let radio 
    let perimetro
    let cantidadAlambre
    
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio)
    perimetro = (3.14 * 2) * radio
    cantidadAlambre = perimetro *3
     
    alert("La cantidad de alambre que hat que comprar es " + cantidadAlambre+ " metros")

}
function Materiales () 
{
    let largodelTerreno 
    let anchodelTerreno
    let area
    let bolsasCal
    let bolsasCemento

    largodelTerreno = document.getElementById("txtIdLargo").value;
    largodelTerreno = parseFloat(largodelTerreno)
    anchodelTerreno = document.getElementById("txtIdAncho").value;
    anchodelTerreno = parseFloat(anchodelTerreno)
    area = largodelTerreno * anchodelTerreno
    bolsasCal= area * 3
    bolsasCemento = area * 2

    alert("Se necesitan " +bolsasCal+ " bolsas de cal y " +bolsasCemento+ " bolsas de cemento.")
    

}