function tampilAngka(e){
	if( e === 0){
		return;
	}
	console.log(e);
	tampilAngka(e-1);
}
tampilAngka(parseInt(prompt('')))
;