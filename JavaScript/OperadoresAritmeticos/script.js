var num1 = prompt("Digite um valor")
var num2 = prompt("Digite outro valor")

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write("A soma entre " + num1 + " e " + num2 + " é: " + (num1 + num2) + "<br>")
document.write("A subtração entre " + num1 + " e " + num2 + " é: " + (num1 - num2) + "<br>")
document.write("A multiplicação entre " + num1 + " e " + num2 + " é: " + (num1 * num2) + "<br>")
document.write("A divisão entre " + num1 + " e " + num2 + " é: " + (num1 / num2) + "<br>")
document.write("O modulo entre " + num1 + " e " + num2 + " é: " + (num1 % num2) + "<br>")
document.write("O incremento de " + num1 + " é " + (++num1) + "<br>")
document.write("O decremento de " + num1 + " é " + (--num1) + "<br>")