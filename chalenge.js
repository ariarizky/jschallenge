/*const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
]
let person = people.filter(function(e){
	return e.age < 21;
});
console.log(person);

for(i=1;i <=1000;i++ ){
	if(i%100 ===0 ){
		document.write(i +'.'+'Kelipatan Seratus' + '<br>');
	}else if(i%2 ===0 && i%5 ===0){
		document.write(i +'.'+' Genap Kelipatan Lima' + '<br>');
	}else if(i%2 !=0 && i%5 ===0){
		document.write(i +'.'+' Ganjil Kelipatan Lima' + '<br>');
	}else if(i%2 ===0 ){
		document.write(i +'.'+' Genap' + '<br>');
	}else{
	document.write(i + '.'+' Ganjil'+ '<br>');
}
}

let nilaiAwal = parseInt(prompt('Masukan Nilai Awal :',''));
let nilaiAkhir = parseInt(prompt('Masukan Nilai Akhir :',''));

//for(nilaiAwal;nilaiAwal<=nilaiAkhir;nilaiAwal++){
//	document.write(' ' +nilaiAwal);}
while(nilaiAwal<=nilaiAkhir){
	document.write(' ' +nilaiAwal);
nilaiAwal++
}

for(i = 1;i<=100;i ++){
	if(i%2 !=0){
		document.write(' '+i + '<br>');
	}
}
let kalimatAwal = 'saya ingin makan nasi goreng';
console.log('Before :' + kalimatAwal);
let arr = kalimatAwal.split(' ');
arr.reverse();
console.log('After :' + arr.join(' '));

let input = prompt('');
let output = input.split('');
output.reverse();
console.log(input + output.join(''));

const fruits = [
  {name: 'Pepaya', price: 3000},
  {name: 'Jagung', price: 2000},
  {name: 'Mengkudu', price: 4000},
  {name: 'Kiwi', price: 6000},
]
fruits.forEach(function(e){
	console.log(e.name, ':',e.price);
})
const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
]
let person = people.filter(function(e){
	return e.age < 21;
})
person.forEach(function(d){
	console.log('id:',d.id,'name:',d.name,'age:',d.age);
})

let input = 0;
let a = 0;
while(input != '='){
	a = a+ parseInt(input);
	input = prompt('Masukan Angka :');
}
alert ('Jumlah :'+ a);


function palindrome(){
let input = prompt('Masukan Kalimat atau Kata :','');
input = input.toLowerCase();
input = input.replace(/[\W_]+/g,"")
console.log(input);
let output = input.split('').reverse().join();
output = output.toLowerCase();
output = output.replace(/[\W_]+/g,"")
console.log(output);
if(input === output){
	alert('Palindrome');
}else{
	alert('Bukan Palindrome');
}}
palindrome();



let input = prompt('');
function palindrome(input) {
  // Good luck!
  var tr = false;
    var gnjl = 0;
  input = input.toLowerCase();
  input = input.replace(/[\W_]+/g,'');
   console.log(input);
  var inputs = input.split("");
  var inputl = inputs.length;
  var cntr = Math.ceil(inputl/2);
  if(inputl%2==1) gnjl = 1;
     
    console.log('inputing: '+inputs);
  console.log('length: '+inputl);
  console.log('center: '+cntr);
  var input1 = [];
  var input2 = [];
  for(var i=0;i<=cntr-1;i++){
        input1.push(inputs[i]);
    }
    for(var i=cntr-1;i<inputl;i++){
        input2.push(inputs[i]);
  }
  if(gnjl){ 
 
  }else{
      input2.splice(0,1);
  }
  input1 = input1.join('');
  input2 = input2.reverse().join('');
  if(input1 == input2) tr =true;
   
  console.log('apakah '+input1+' = '+input2+'?');
  console.log('hasil: '+tr);
  return tr;
}
alert(palindrome(input));
*/


}