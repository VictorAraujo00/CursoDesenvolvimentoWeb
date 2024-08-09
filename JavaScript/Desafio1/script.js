var a = 10
var b = 20
var c = null

document.write("<h2>Valores Antes das mudanças</h2>")
document.write("Valor A: " + a + "<br>")
document.write("Valor B: " + b + "<br>")
document.write("Valor C: " + c + "<br>")


c = a
a = b
b = c

document.write("<h2>Valores Depois das mudanças</h2>")
document.write("Valor A: " + a + "<br>")
document.write("Valor B: " + b + "<br>")
document.write("Valor C: " + c + "<br>")