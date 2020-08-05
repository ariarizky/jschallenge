let input = prompt('Masukan Angka :');
let a = 0;
 
while (input != '='){
	a = a+ parseInt(input);
	input = prompt('Masukan Angka :');
}
alert ('jumlah :' + a);

