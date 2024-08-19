var data = new Date()

/*document.write(data.getDate())
document.write("<br>")
document.write(data.getMonth() + 1)
document.write("<br>")
document.write(data.getFullYear())
document.write("<br>")
document.write(data.toString())
document.write("<br>")
data.setDate(data.getDate() + 1)
document.write(data.toString())
document.write("<br>")

document.write(data.toString())
document.write("<br>")
data.setMonth(data.getMonth() + 1)
document.write(data.toString())
document.write("<br>")

document.write(data.toString())
document.write("<br>")
data.setFullYear(data.getFullYear() + 1)
document.write(data.toString())*/

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write("<hr>")
document.write(data2.toString())

document.write("<br><br><hr>")

document.write(data1.getTime())
document.write("<hr>")
document.write(data2.getTime())

document.write("<br><br><hr>")

var milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())

document.write(Math.abs(data1.getTime() - data2.getTime()))

var milisegundosPorDia = 1*24*60*60*1000

document.write(" 1 dia tem: " + (1*24*60*60*1000) + " milisegundos")

document.write("<br><br><hr>")

document.write("A diferença de dias entre data 1 e data 2 é: " + Math.ceil(milisegundosEntreDatas/milisegundosPorDia) + " dias")



