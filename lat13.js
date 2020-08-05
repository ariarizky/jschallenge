const fruits = [
  {name: 'Pepaya', price: 3000},
  {name: 'Jagung', price: 2000},
  {name: 'Mengkudu', price: 4000},
  {name: 'Kiwi', price: 6000},
]
fruits.forEach(myFunction)
	function myFunction(e){
	console.log(e.name,':',e.price)
}