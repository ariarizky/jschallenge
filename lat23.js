let a = [];

function addArr(){
	let b = document.querySelector("#arrayBaru").value
	a.push(b);
	console.log(a)
}
function popArr(){
	let b = document.querySelector("#arrayBaru").value
	a.pop(b);
	console.log(a)
}