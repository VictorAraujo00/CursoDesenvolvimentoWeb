function mudarBackground(){
	document.getElementById('texto').style.background = 'yellow'
}

function recuperarCaracter(){

	var texto = document.getElementById('texto')

	if(texto.value.length < 3){
		texto.style.background = 'red'
	}
	else{
		texto.style.background = 'green'
	}




}