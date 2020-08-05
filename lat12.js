var tanya = true;
while(tanya){

var arr = prompt(' ');
var input = arr.split('');
console.log(input);
input.reverse();
console.log(arr + input.join('')+'<br>');

tanya = confirm('ulang?');
}