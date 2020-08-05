const kota = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

function removeDups(kota) {
  let remove = {};
  kota.forEach(function(i) {
    if(!remove[i]) {
      remove[i] = true;
    }
  });
  return Object.keys(remove);
}
console.log(removeDups(kota));
