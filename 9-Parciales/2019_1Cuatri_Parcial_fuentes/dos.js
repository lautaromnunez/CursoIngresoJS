function mostrar()
{
  let nombrep1;
  let nombrep2;
  let pesop1;
  let pesop2;
  let ambospesos
  let promedio;

  nombrep1 = prompt("Ingrese su nombre");
  nombrep2 = prompt("Ingrese su nombre")
  pesop1 = prompt("Ingrese su peso")
  pesop2 = prompt("Ingrese su peso")  
  pesop1 = parseInt(pesop1)
  pesop2 = parseInt(pesop2)
  ambospesos = pesop1 + pesop2
  promedio = (ambospesos / 2)

  alert("Ustedes se llaman " +nombrep1+ " y " +nombrep2+ " pesan " +pesop1+ " y " +pesop2+ " kilos, que sumados son " +ambospesos+ " kilos y el promedio de peso es " +promedio+ ".")

}


