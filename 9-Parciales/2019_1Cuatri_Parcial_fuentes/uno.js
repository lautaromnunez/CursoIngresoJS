
function mostrar()
{
    let longitudladotriangulo; //se pide un lado de la longitud ya que el perimetro del triangulo equilatero es l*3
    let perimetro;

    longitudladotriangulo = prompt ("Ingrese la longitud de un lado del triangulo");
    longitudladotriangulo = parseInt(longitudladotriangulo);
    perimetro = longitudladotriangulo * 3;

    alert("La longitud del triangulo es de " + perimetro);


}
