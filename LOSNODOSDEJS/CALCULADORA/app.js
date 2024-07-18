var N1 = document.getElementById('num1')
var N2 = document.getElementById('num2')
var campo = document.getElementById('resultado')

function calcular(){
    var num1 = parseInt(N1.value)
    var num2 = parseInt(N2.value)
    var resultado = num1 + num2
    alert('La suma es: '+ resultado)
    resultado = num1 - num2
    alert('La resta es: '+ resultado)
    resultado = num1 * num2
    alert('La multiplicación es: '+ resultado)
    if (num2!= 0){
        resultado = num1 / num2
        alert('La división es: '+ resultado)
    } else {
        alert('No se puede dividir por cero')
    }
}
