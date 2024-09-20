//variables en java script
//se tiene dos tipos, premitivos y complejos
//-----------------------------------------------------------------------------------
//variables PRIMITIVOS
let carro= 2//number
let hola = "hola"//string
let boolean = true // boolean
let vr= null// null, lo usamos para decir que no hay nada
//let vr= undefined // undefined no hay valor , generalmente se coloca automaticamente
let vfar= Symbol(2); //symbolo, da un valor unico a nuestra variable
let vra=2n;// bigint //
//variables  COMPLEJAS
let carros ={//objeto
    marca:'tesla',
    modelo: 'modelos s'
}  // object, donde una variable se puede ver repetida con algunos atributos en comun
let frutas = ['manzana,fresa,breva'] // Array, para encajar varias cosas en nuestra array
//function vr(params) {} // function
//---------------------------------------------------------------------------------------
//STRINGS
let string1= "hola" // nos permite anexar texto normal 
let string2= 'hola, es genial' // this similar that "", our decision which one to use
let string3= `${string1} hola mundo` // this string allows us to append other strings (allows us = nos permite)
let frase='Java es Extremadamente real' // if we want to know the length of a string, use name.length
//console.log(frase.length)
console.log(frase.toLowerCase())//.tolowe.. this shows us a string in lowercase only (show us= nos muestra ; lowercase = minuscular)
console.log(frase.toUpperCase())// this shows us a string in uppercase only / (uppercase = mayusculas)
console.log(frase.substring(0,10))// (index inicial, index final), this shows us a secction of a string
//-------------------------------------------------------------------------------------------
//NUMBER
//tipo Entero y decimal
const entero = 42
const decimal= 32.3 // both types are of number variables / typeof allows us to know what type is a variabel(both = ambos)
//Notacion cientifica // scientific notation
const cientifico =5e3
const infinito= Infinity
const noEsnumero= NaN // 
//-------------------------------------------------
//arithmetic operations
const sum = 4+1
const subtraction = 2-2
const product= 2*3
const division= 2/3
//module and exponentation
const module = 15 %6
const exponentation = 2 **3 
//accuracy (accuracy is precision) 
// in java script the accuary is relative, for example, 0.1 + 0.2 is 0.3000004, but toFixes(1) allow us to determine the number of decimals
const suma3= 0.1 + 0.2 
console.log(suma3.toFixed(1))
//advanced operations
const raizCuadrada = Math.sqrt(16) // math.sqrt allow us to get the square root (square root = raiz cuadrada)
const absoluteValue = Math.abs(-7) // abs allow us to get the absoluto valor
