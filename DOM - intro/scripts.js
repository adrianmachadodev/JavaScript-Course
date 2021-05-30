/* 
    document.getElementById('id') - Acceder a un elemento a traves de su id

    document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

    document | element .querySelectorAll('selectorCSS) - Accede a todos los elementos que coincidan con el selector CSS,
    devuelve un nodeList

*/


/* const title = document.getElementById('title');

title.textContent = 'DOM - Accediendo a nodos';  */

//-------------------------------------------------------------querySelector()

/* const paragraph = document.querySelector('.paragraph:nth-child(2)');

console.log(paragraph);

 */

//-------------------------------------------------------- querySelectorAll


const paragraphs = document.querySelectorAll('.paragraph');

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphs[0].style.color = 'red';

console.log(paragraphs);

paragraphsArray.map(p => p.style.color = 'red');