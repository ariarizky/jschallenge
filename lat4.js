var tahun = prompt ('Masukan Tahun:','');
if(tahun%400 != 0 && tahun%100 == 0){
	jenis = 'Bukan Tahun Kabisat';
}else if(tahun%4 != 0){
	jenis = 'Bukan Tahun Kabisat';
}else{
	jenis = 'Tahun Kabisat';
}
var jenis = prompt ('Jenis:',jenis);
