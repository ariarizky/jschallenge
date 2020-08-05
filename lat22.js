   
function cToF(celsius) {
  var cTemp = document.querySelector("#inputSuhu").value
    var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
   alert(message);
}

function cToK(celsius) {
  var cTemp = document.querySelector("#inputSuhu").value
  var cToKel = (cTemp /1)+273.15
  var message = cTemp+'\xB0C is ' + cToKel + ' \xB0K.';
    alert(message);
}

function fToC(fahrenheit) {
  var fTemp = document.querySelector("#inputSuhu").value
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    alert(message);
}

function fToK(fahrenheit) {
  var fTemp = document.querySelector("#inputSuhu").value
  var fTokel = (fTemp - 32) /1.8 +273.15 ;
  var message = fTemp+'\xB0F is ' + fTokel + '\xB0K.';
    alert(message);
}

function kToC(kelvin) {
  var fTemp = document.querySelector("#inputSuhu").value
  var fToCel = fTemp - 273.15
  var message = fTemp+'\xB0K is ' + fToCel + '\xB0C.';
    alert(message);
}

function kToF(kelvin) {
  var fTemp = document.querySelector("#inputSuhu").value
  var kToFahr = ((fTemp - 273.15)*1.8)+32  ;
  var message = fTemp+'\xB0K is ' + kToFahr + '\xB0F.';
    alert(message);
}
