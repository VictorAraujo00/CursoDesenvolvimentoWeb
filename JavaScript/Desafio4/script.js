var num1 = prompt("Digite o primeiro número")
var operacao = prompt("Digite qual operacao deseja fazer(soma ou subtração)")
var num2 = prompt("Digite o segundo número")

num1 = parseInt(num1)
num2 = parseInt(num2)

function calculo(num1, num2, operacao){

	var resultado

	if(operacao == "soma"){
		resultado = num1 + num2
	}
	else if(operacao == "subtração"){
		resultado = num1 - num2
	}

	return resultado

}

var resultado = calculo(num1, num2, operacao)

document.write("O resultado é: " + resultado)