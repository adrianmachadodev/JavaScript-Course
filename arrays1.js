/* let numeros = [1,2,3,4,5];

let palabras = ['Hola', 'estamos', 'en', 'youtube'];


console.log(numeros[0] + numeros [1]);

console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length}`);

console.log(numeros); */

//arrayII

let numbers = [1,2,3,4,5];

/* console.log(numbers.length); //devuelve el numero de posiciones del array */


let number = 4;

/* console.log(Array.isArray(number)); */

/* let deleteNum = numbers.shift(); */

//console.log(numbers);
/* numbers.shift(); *   
elimina el primer elemento del array y devuelve ese elemento
//console.log(numbers); 

//-----------------------------------------------------

//numbers.pop();    
// elimina el ultimo elemento del array y devuelve ese elemento
//console.log(numbers); 
*/

//-----------------------------------------------------

// añadir elementos
//console.log(numbers);
//numbers.push(6); // añade uno o mas elementos al FINAL// del array
//console.log(numbers);

//-----------------------------------------------------

//let newLenght2 = numbers.unshift(0); // añade uno o mas elementos al COMIENZO del array
//console.log(numbers);

//buscar elementos en el array

//-----------------------------------------------------

//console.log(numbers);
//console.log(numbers.indexOf(2)); // devuelve el primer indice del elemento que coincida con el valor especificado

//-----------------------------------------------------

//console.log(numbers);
//console.log(numbers.lastIndexOf(2)); // Devuelve el ultimo indice del elemento que coincida con el valor

//-----------------------------------------------------

//console.log(numbers);
//numbers.reverse(); // invierte el orden del array.
//console.log(numbers);

//-----------------------------------------------------

//console.log(numbers);
//console.log(numbers.join('')); // devuelve un string con el separador que indiquemos


//-----------------------------------------------------
/* .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
a - Indice de inicio
b - Número de elementos (opcional)
items - Elementos a añadir en el caso de que se añadan. (opcional) */

//console.log(numbers.splice(3));
//console.log(numbers.splice(2,2));
//console.log(numbers.splice(2,2,10)); // elemina y agrega nuevos elementos

//-----------------------------------------------------

//let newNumbers = numbers.slice();
//console.log(numbers);
//console.log(newNumbers);

/* let newNumbers = numbers.slice(2);
console.log(numbers);
console.log(newNumbers); */

let newNumbers = numbers.slice(2,3);
console.log(numbers);
console.log(newNumbers);
