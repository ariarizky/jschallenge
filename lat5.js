let umur = prompt('Masukan Umur:','');
if(umur >= 21){
	rating = 'Dewasa';
}else if(umur >= 13){
	rating = 'Remaja';
}else if(umur >= 9){
	rating = 'Bimbingan Orang tua';
}else{
	rating = 'Semua Umur';
}
let rating = prompt ('Rating:',rating);