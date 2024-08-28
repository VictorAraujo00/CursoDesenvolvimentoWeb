var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionar(){

	var valor = document.getElementById('entrada').value
	var indexValor = objetos.indexOf(valor)

	if(valor == ''){
		alert("Informe um valor válido")
	}

	if(indexValor != -1){
		alert("Objeto já foi adicionado")
	}
	else{
		objetos.push(valor)
	}

	document.getElementById('entrada').value = ''

	console.log(objetos)


}

function ordenar(){
	objetos.sort()
	console.log(objetos)
}