var lista_frutas = []

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

lista_frutas.sort()

console.log(lista_frutas)

var lista_numeros = []

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

lista_numeros.sort(ordenar_numeros)

console.log(lista_numeros)

function ordenar_numeros(a, b){
	return a - b
}