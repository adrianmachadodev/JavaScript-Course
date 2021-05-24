//Programacion orientada a objetos (POO)
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me  llamo ${nombre} ${apellido} y tengo ${edad} años`
    }


    saludar(){
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`

    }
  
}   

const juan = new Persona ('Juan', 'Garcia', '23');
const marta = new Persona ('Marta', 'Garcia', '33');

console.log(juan.saludar());
console.log(marta.saludar());