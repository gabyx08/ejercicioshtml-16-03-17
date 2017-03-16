function convertirCelsius(){
  var farenheit= document.getElementById("farenheit").value;
  var farenheitToCelsius=((farenheit-32)/1.8).toFixed(2);
  document.getElementById("conversionFaC").value= farenheitToCelsius;
}

function convertirFarenheit(){
  var celsius= document.getElementById("celsius").value;
  var celsiusToFarenheit= ((celsius*1.8)+32).toFixed(2);
  document.getElementById("conversionCaF").value= celsiusToFarenheit;
}
