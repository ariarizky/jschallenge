for(var angka = 1; angka <= 1000; angka++){
  if(angka%100 == 0){
    document.write( angka + '.' + ' ' + 'Kelipatan Seratus'+'<br>');
  }
  else if(angka%2 == 0 && angka %5 == 0){
    document.write( angka + '.' + ' ' + 'Genap Kelipatan Lima' + '<br>');
  }
  else if(angka%2 != 0 && angka %5 == 0){
    document.write( angka + '.' + ' ' + 'Ganjil Kelipatan Lima' + '<br>');
  }
  else if(angka%2 == 0){
    document.write( angka + '.' + ' ' + 'Genap' + '<br>');
  }
  else{
	  document.write( angka + '.' + ' ' + 'Ganjil' + '<br>');
  }
}