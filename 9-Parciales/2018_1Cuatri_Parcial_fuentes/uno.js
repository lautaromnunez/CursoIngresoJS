
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese la medida del ancho del rectangulo");
    ancho = parseFloat(ancho);
    largo = prompt("Ingrese la medida del largo del rectangulo");
    largo = parseFloat(largo);
    perimetro = (ancho * 2) + (largo * 2);

    alert("El perimetro del triangulo es de "+ perimetro);
}
