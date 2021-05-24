const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer numero');
let b = prompt('Introduzca el segundo numero');
let c = prompt('Introduzca el tercer numero');

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`

if(a >= b &&  a >= c){

    if(b > c){

        result.textContent = `El orden es: ${a}, ${b}, ${c}`

    }else{

        result.textContent = `El orden es: ${a}, ${c}, ${b}`

    }
    
}else if(b >= a && b >= c){
    if(a > c){

        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{

        result.textContent = `El orden es: ${b}, ${c}, ${a}`


    }


}