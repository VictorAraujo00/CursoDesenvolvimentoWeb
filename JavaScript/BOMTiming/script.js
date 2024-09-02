/*setTimeout(function(){document.write('Teste')}, 2000)*/

var i = 5

var x = setInterval(function(){document.write(i); i -= 1; document.write('<br>'); if(i==0){clearInterval(x)}}, 1000)