/*Strings */


//length -- devuelve la longitud de la cadena

/*let cadena = "hola mundo";

console.log(cadena.length);*/



//toUpperCase -- devuelve la cadena a mayusculas

/*console.log(cadena.toUpperCase())

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);*/

//toLowerCase() -- devuelve la cadena en minusculas

// console.log (cadena.toLowerCase());

// indexOf(string) -- devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1

 /* console.log(cadena.indexOf('Hola'));
 console.log(cadena.indexOf('o')); */

 //replace (valor que vamos a buscar, valor nuevo) -- remplaza el fragmento de la cadena que le digamos y pone el valor.

 /* console.log(cadena.replace('mundo', 'youtube')); */

 //subtring(inicio [, fin]) -- extrae los caracteres desde inicio hasta fin (el final no se incluye)

/*  console.log(cadena.substring(3, 7));
 //o
 console.log(cadena.substring(3, 7-1)); */

 //slice (inicio [, fin]) -- igual que el substring pero admite valores negativos, si ponemos valores negativos
 //comenzara desde atras

/*  console.log(cadena.slice(3)); */

//trim -- Elimina los espacios al inicio y al final de una cadena.

/* let cadena2 = "Hola mundo, estoy trabajando con cadenas";

console.log(cadena2.trim);
 */

//--ES6--

//startsWith(valor, [, incio]) -- Sirve para saber si la cadena empieza con ese valor. devuelve true or false

/* console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));

console.log(cadena.startsWith('M', 5)); */


//endsWith (valor, [,longitud]) - sirve para saber si la cadena termina con ese valor. Devuelve true or false 

/* console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('n', 8));
console.log(cadena.endsWith('Mundo')); */

//includes(valor [, inicio]) -- Igual que indexOf pero devuelve true o false

/* console.log(cadena.includes('n'));
console.log(cadena.includes('a', 5));
console.log(cadena.includes('a', 2)); */

//repeat (valor) -- Repite el string el numero de veces que le indiquemos

/* let cadena3 = 'Hola';


console.log(cadena3.repeat(3)); */

// template strings

let nombre = 'juan';
let apellido = 'Gomez';
let edad = 20;


console.log("Hola" + nombre + " " + apellido + ". Tienes " + edad + " años. " );


console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.` );



console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años.` );



 

