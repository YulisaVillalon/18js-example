//console.log('Hola Mundo')

//Tipos de datos en JS
//String: cadena de caracteres. 'a' 'hola' 'hola mundo' hola mundo maravilloso' 'chanchito feliz' "a" "hola" "hola mundo"
//Boolean: true false. Evaluar si se ejecutan las condiciones del código para decidir si se ejecuta o no.
//Null : nulo. Es un valor que refiere a una variable sin contenido.
//Number: 133324323423 1 12 123. "123" 123.
// "123" es un String. Es distinto de 123, que es un Number.
//Undefined. Es una variable no definida (a a¿diferencia de Null, que sí está definida).
//Object: objeto. En él se pueden agrupar todos los datos anteriores.

//Definición de variables
//var
//let
//const

//var miPrimeraVariable = 'lala'. Lleva el valor de la variable al inicio. Hay que tratar de evitar usarla en general porque puede causar un comportamiento erróneo en el código.

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

//mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -158

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

let undef 
//console.log(undef)

let nulo = null
//console.log(nulo)

//Objeto: agrupación de datos que hacen sentido entre sí.

//Objeto vacío
//const miPrimerObjeto = {}

//Objeto. Se compone de variables o valores a los que se les denomina "propiedades".
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

//console.log(miObjeto.unString)

//Arreglo. Parecido a una lista, pero la diferencia es que puede incluir cualquier tipo de dato, 
//mientras que las listas continen el mismo tipo de dato. 
//Por definición una lista es un subconjunto de un arreglo.
//Así como las propiedades son a las variables, las propiedades o funciones de los arreglos y objetos se llaman "métodos".
//Variables -> propiedades
//Arreglos, Objetos -> funciones (métodos)

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

//console.log(arrVacio, arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)

//console.log(arrVacio);

const suma = 1 + 2
const resta = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3

//console.log(suma, resta, multiplicar, division);

const modulo = 10 % 3
//console.log(modulo);

let num = 5
//const vs let : declarar variable en const la hace fija y sólo se pueden alterar sus propoiedades, pero siempre tendrán que aparecer todas iguales. 
//En cambio declrar variables con let la hace "variable", lo que significa que el valor de la variable puede cambia o modificarse en cualquier parte del código según las condiciones en las que sté, sin ser un valor fijo.
//num++
//num++
//num++
//num++
//num++

//num--
//num--
//num--
//num--
//num--

num += 5
num -= 5
num *= 5
num /= 2

//operadores de compararación: qué camino voy a seguir en mi código)

//igualdad estricta
const resultado1 = 5 === 6
//igualdad no estricta. Strings pueden ser iguales a números si el valor es el mismo.
const resultado2 = 5 === '5'

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

//Diferencia estricta: se guiará por el tipo de dato e ignorará el valor
const resultado11 = 5 !== '5'
//Diferencia no estricta: se guiará por el valor, no por el tipo de dato
const resultado12 = 5 != '5'

//console.log(resultado11, resultado12);

//Operadores lógicos

// or ||, and &&, not !   Short circuit evaluation

// Or evalúa los valores hasta encontrar uo verdadero, si lo encuentra, ya no sigue evaluando
//Or evalúa cualquier dato en true, excepto false o el número 0

const resultadoOr = false || true || 'Hola' || 'Mundo'
//console.log(resultadoOr)

//And también va a evaluar valores pero hasta encontrar un false, 
//sin embargo no tendrá las mismas funciones que Or y seguirá ejecutando cierto código
const resultadoAnd = true && true && true && true && true && false
//console.log(resultadoAnd)

const resultadoNot = !false
//console.log(resultadoNot);


//Control de flujo: permite realizar iteraciones y evaluar condiciones
//En el () va lo que quiero evaluar
//En el {} lo que se va a ejecutar de ser true

//Control de flujo IF
const edad = 5
if (edad > 5 && edad < 18) {
    console.log('El niño puede jugar')
} 

//console.log('Fin programa')

//Control de flujo WHILE
//let x = false
//while (x) {
 //console.log(x)
 //x = false
//}

//console.log('Terminando el loop')

//Control de flujo SWITCH : dependiendo del valor de la variable se ejecutan diversos trozos de código

//let y = 3;

//switch (y) {
    //case 1: 
        //console.log('yo soy el caso 1');
        //break;
    
    //case 2:
        //console.log('chanchito feliz');
        //break;
    
    //case 3: 
        //console.log('chanchito triste :(')
        //break;

    //default:
        //console.log('no hay chanchitos!');
        //break;
//}


//Control de flujo FOR: parecido a while, se da una condición que se repite hasta terminar
//Primero se define el valor inicial del iterador
//Luego va hasta donde va a llegar
//Finalmente lo que debe pasar en cada vuelta
//!!! Nos va a permitir iterar sobre nuestros arreglos!!! 

//for (let i = 0; i < 10; i++) {
    //console.log(i)
//}


//Acceder a cada uno de los elementos de un arreglo

//const numeros = [1, 2, 'Hola', 4, 5]

//console.log(numeros[2]);

//for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i]);
//}


//Funciones

function iterar() {
    const numeros = [1, 2, 'Hola', 4, 5]

    for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

iterar()
iterar()