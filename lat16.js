var tanya = true;
while (tanya){
var arr = prompt('');
var input = arr.split('');
input.reverse('');
if(arr == input.join('')){
	alert('Palindrome');
}else{
	alert('Bukan Palindrome');
tanya = confirm('ulang ?');
}
}
