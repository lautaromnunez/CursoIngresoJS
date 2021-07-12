function mostrar()
{
    let precioIngresado;
    let descuentoIngresado;
    let precioFinal;

    precioIngresado = prompt("Ingrese el precio");
    precioIngresado = parseFloat(precioIngresado);
    descuentoIngresado = prompt("Ingrese el porcentaje de descuento");
    descuentoIngresado = parseFloat(descuentoIngresado);
    precioFinal = precioIngresado - (descuentoIngresado /100 * precioIngresado);

    document.getElementById("elPrecioFinal").value = precioFinal;


}
