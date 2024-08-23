function modificaClasse(){

	var elemento = document.getElementById('mensagem')

	if(elemento.className == 'estilo1'){
		document.getElementById('mensagem').className = 'estilo2'
	}
	else{
		document.getElementById('mensagem').className = 'estilo1'
	}

	

}