var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

for(var i = 0; i < lista_frutas.length; i++){

	document.write(lista_frutas[i] + '<br>')
}

document.write('<hr>')


var i = 0;
var j = 0;

while(i < 10){

	i++

	while(j < 10){

		j++
		var result = i * j

		document.write(i + ' x ' + j + ' = ' + result + '<br>')

	}

	j = 0
	document.write('<hr>')
}