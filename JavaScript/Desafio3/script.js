var nome = prompt("Digite o seu nome")
var altura = prompt("Digite sua altura em centimetros")
var peso = prompt("Digite o seu peso")

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

var m = peso/(altura*altura)

var classificacao

if(m < 16){
	classificacao = "Baixo peso muito grave"
}
else if(m >= 16 && m <= 16.99){
	classificacao = "Baixo peso grave"
}
else if(m >= 17 && m <= 18.49){
	classificacao = "Baixo peso"
}
else if(m >= 18.50 && m <= 24.99){
	classificacao = "Peso normal"
}
else if(m >= 25 && m <= 29.99){
	classificacao = "Sobrepeso"
}
else if(m >= 30 && m <= 34.99){
	classificacao = "Obesidade grau 1"
}
else if(m >= 35 && m<= 39.99){
	classificacao = "Obesidade grau 2"
}
else{
	classificacao = "Obesidade grau 3"
}

document.write(nome + " possui índice de massa corporal igual a " + m + " sendo classificado como: " + classificacao)