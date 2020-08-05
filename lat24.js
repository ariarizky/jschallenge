let a = [];

function addArr(){
	let b = document.querySelector("#arrayBaru").value
	a.push(b);
	console.log(a)
}
function shiftArr(){
	let b = document.querySelector("#arrayBaru").value
	a.shift(b);
	console.log(a)
}