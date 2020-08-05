/*let nilaiAwal = prompt ('Masukan Nilai Awal:', '');
let nilaiAkhir = prompt ('Masukan Nilai Akhir:','');;
while(parseInt(nilaiAwal) <= parseInt(nilaiAkhir)){
	document.write( ' ' ,+ nilaiAwal );
nilaiAwal++;
}
*/
let nilaiAwal = prompt ('Masukan Nilai Awal :', '');
let nilaiAkhir = prompt ('Masukan Nilai Akhir:','');
	for(nilaiAwal ; parseInt(nilaiAwal) <= parseInt(nilaiAkhir); nilaiAwal++){
		document.write(' ',+nilaiAwal);
	}
	