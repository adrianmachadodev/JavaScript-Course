let num = 0


switch(num){

        case 1: 
            console.log(`${num} tiene el valor 1`);
        break;
        case 2: 
            console.log(`${num} tiene el valor 2`);
        break;
        default: console.log(`${num} no vale ni 1 ni 2`);

}

//sintaxis multiple

switch(num){
    case 1:
    case 2:
    case 3:
    console.log('num es impar');

}