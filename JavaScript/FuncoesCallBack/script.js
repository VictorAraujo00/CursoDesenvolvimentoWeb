function exbirArtigo(id, callBackSucesso, callBackErro){

	if(true){
		callBackSucesso('Funções de callback em js', 'Funções de callback são muito utilizadas')
	}
	else{
		callBackErro("Erro ao recuperar os dados")
	}


}

var callBackSucesso = function(titulo, descricao){

	document.write("<h1>" + titulo + "</h1>")
	document.write("<hr>")
	document.write("<p>" + descricao + "</p>")

}

var callBackErro = function(erro){

	document.write("<p><b>Erro:</b>" + erro + "</p>")

}

exbirArtigo(1, callBackSucesso, callBackErro)