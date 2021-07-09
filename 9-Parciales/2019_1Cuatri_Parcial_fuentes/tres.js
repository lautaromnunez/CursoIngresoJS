function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let descuentoAplicado;
    let precioconDescuento
    

    precio = prompt("Ingrese el importe");
    precio = parseFloat(precio);
    porcentajeDescuento = prompt("Ingrese porcentaje de descuento");
    porcentajeDescuento = parseFloat(porcentajeDescuento);
    descuentoAplicado = precio * (porcentajeDescuento/100);
    precioconDescuento = (precio - descuentoAplicado);

    document.getElementById("elPrecioFinal").value = precioconDescuento;




}
