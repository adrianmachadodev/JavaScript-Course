const button = document.getElementById('button');

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

// prompt('Escriba su nombre');

// if(confirm('acepta??')){
//     console.log('El usuario acepto');
// }else{
//     console.log('El usuario no acepto');
// }

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const person = {
    name: 'adrian',
    age:30,
    email: 'adrian@gmail.com'

}

console.table(person);

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href // se puede enviar de una pagina a otra
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

/* console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash); */
// console.log(location.reload);


/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)
    length
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/
const date = new Date()

console.log(date.getDay());

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* button.addEventListener('click', () =>{
    // setTimeout(saludar, 3000);
    setTimeout(() =>{
        console.log('ADIOS');
    },3000)

    clearTimeout(timeout);
}) */



const saludar = () =>{
    console.log('hola');

}

let cont = 0;

// const interval = setInterval(saludar, 3000);

setInterval(() =>{
    console.log(cont);
    cont++;
}, 3000);