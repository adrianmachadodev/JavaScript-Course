/* Spread operator (Operadores de expansion) */

/* const numbers = [-12, 2, 3, 23, 43, 2, 4];
 */
/* console.log(...numbers); */

//Enviar elementos en un array a una funcion

/* const addNumbers = (a, b, c) => {

    console.log(a+b+c);


}

let numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd);  */

/* Añadir un array a otro array */

/* let users = ['javier', 'david', 'rosa', 'juan', 'mercedes'];

let newUsers = ['marta', 'jaime', 'pepe'];

users.push(...newUsers);

console.log(users); */

//Copiar array 

/* let arr1  = [1, 2, 3, 4];
let arr2 = [...arr1]; */

// concaternar arrays

/* let arr1  = [1, 2, 3, 4, 5];
let arr2 = [6,7,8]; 

let arrConcat = arr1.concat(arr2);
console.log(arrConcat); */

//Enviar un numero indefinido de argumentos a una funcion (parametros REST)

/* const restParms = (...numbers) => {

    console.log(numbers);


}

restParms(1); */


//libreria math

const numbers = [-12, 2, 3, 23, 43, 2, 4];


console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// eliminar elementos duplicados
console.log([...new Set(numbers)]);
