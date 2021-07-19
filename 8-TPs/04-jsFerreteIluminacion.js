/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


function CalcularPrecio () 
{
 	const precioInicial = 35;
    let cantidadLamparitas;
    let precioFinal;
    let marcaLamparitas;
    let descuento;
    let precioSinDescuento;
    let ingresosBrutos;
    
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseInt(cantidadLamparitas)
    marcaLamparitas = document.getElementById("Marca"). value;
    precioFinal = document.getElementById("txtIdprecioDescuento").value;
    precioSinDescuento = cantidadLamparitas * precioInicial;

    
    if(cantidadLamparitas>5)
    {
        descuento = (precioSinDescuento*50) /100;
    }
    else
    {
        if(cantidadLamparitas == 5)
        {
            if(marcaLamparitas=="ArgentinaLuz")
            {
                descuento = (precioSinDescuento*40)/100;
            }
            else
            {
                if(cantidadLamparitas!="ArgentinaLuz")
                {
                    descuento = (precioSinDescuento*30)/100;
                }
            }
        }
        else
        {
            if(cantidadLamparitas==4)
            {
                if(marcaLamparitas =="ArgentinaLuz" || marcaLamparitas=="FelipeLamparas")
                {
                    descuento = (precioSinDescuento*25)/100;
                }
                else
                {
                    if(marcaLamparitas =!"ArgentinaLuz" || "FelipeLamparas")
                    {                       
                        descuento = (precioSinDescuento*20)/100;                      
                    }
                }
            }
            else
            {
                if(cantidadLamparitas == 3)
                {
                    if(marcaLamparitas == "ArgentinaLuz")
                    {  
                        descuento = (precioSinDescuento*15)/100;                       
                    }
                    else
                    {
                        if(marcaLamparitas == "FelipeLamparas")
                        {                           
                            descuento = (precioSinDescuento*10)/100;                        
                        }
                        else
                        {
                            if(marcaLamparitas =!"ArgentinaLuz" || "FelipeLamparas")
                            {
                                descuento = (precioSinDescuento*5)/100;
                            }
                        }
                    }
                }
            }
        }
    }
    precioFinal = precioSinDescuento - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
    if(precioFinal > 120)
    {
        ingresosBrutos = (precioFinal * 10)/100
        precioFinal = ingresosBrutos +precioFinal;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        
        alert("IIBB Usted pago " + ingresosBrutos);   
    }
}*/

//switch + if
/*function CalcularPrecio ()
{
    const precioInicial = 35;
    let cantidadLamparitas;
    let marcaLamparitas;
    let descuento;
    let precioSinDescuento;
    let precioFinal;
    let ingresosBrutos;

    cantidadLamparitas =document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marcaLamparitas = document.getElementById("Marca"). value;
    precioFinal = document.getElementById("txtIdprecioDescuento").value;
    precioSinDescuento = cantidadLamparitas * precioInicial;

    switch(cantidadLamparitas)
    {
        case 5:
            if(marcaLamparitas=="ArgentinaLuz")
            {
                descuento =(precioSinDescuento*40) /100;
            }
            else
            {
                descuento = (precioSinDescuento*30) /100;
            }
        break;
            
        case 4:

        if ( marcaLamparitas == "ArgentinaLuz"|| marcaLampara== "FelipeLamparas")
        {
            descuento = (precioSinDescuento*25) /100;
        }
        else
        {
            descuento = (precioSinDescuento*20) /100;
        }

        break;

        case 3:

        if (marcaLamparitas == "ArgentinaLuz")
        {
            descuento = (precioSinDescuento*15) /100;
        }
        else
        {
            if (marcaLamparitas == "FelipeLamparas")
            {
                descuento = (precioSinDescuento*10) /100;
            }
            else
            { 
                descuento =(precioSinDescuento*5) /100;
            }
        }

        break;

        case 2:
        case 1:
        descuento = (precioSinDescuento*0) /100;
        break;

        default :
        descuento = (precioSinDescuento*50) /100;
        break;
    }
precioFinal = precioSinDescuento - descuento;
document.getElementById("txtIdprecioDescuento").value = precioFinal;

if(precioFinal > 120)
    {
        ingresosBrutos = (precioFinal * 10)/100
        precioFinal = ingresosBrutos +precioFinal;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        
        alert("IIBB Usted pago " + ingresosBrutos);   
    }
}*/
