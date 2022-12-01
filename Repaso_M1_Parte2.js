const { par, Stack, obj_test,BinarySearchTree,arbolito } = require("./WS"); // importamos funciones
const {LinkedList}= require("./DS")
/*
cb
Stack
clousure
recursividad
LinkedList
Tree
*/
console.log("hi")
/*
01. Ejercicio cb
Realizar una función que recibe un array y una callback, la callback sortea los 
items del array según su criterio. Retorna los valores pares los cuales nosotros
debemos devolver la suma de estos
*/
function resive_sum(arr, cb){
   // tu code aquí
}
console.log(resive_sum([1,2,3,4],par))

/*
02. Ejercicio Stack
EJEMPLOS:
// Dado el siguiente arreglo (INPUT): [37, 38, 38, 39, 41, 36, 41, 41, 37, 42]
// apilarPantalones(arreglo, 38) Devuelve (OUTPUT) ➡️Stack([38, 38])
// 
//   pantalonesRestantes: Stack([37, 39, 41, 36, 41, 41, 37, 42])
*/
function apilar_lompa_repetidos(stack){
    // tu code aquí
    return {array:[18,18]}
}
const pila = new Stack()
pila.enqueue(18)
pila.enqueue(21)
pila.enqueue(18)
pila.enqueue(14)
console.log(pila)
console.log(apilar_lompa_repetidos(pila))
/*
03. Ejercicio clousure

*/
// Implementar la función closureGreeting que recibe un parámetro (prefix) mediante closures debe permitir
// generar nuevas funciones de saludo dejando fijo siempre el prefijo indicado.
// Ejemplo 1:
//    var hiGreeting = closureGreeting("Hi");
//    hiGreeting("Franco");  --> Devolverá "Hi Franco, you are number 1"
//    hiGreeting("Toni"); --> Devolverá "Hi Toni, you are number 2"
// Ejemplo 2:
//    var helloGreeting = closureSum("Hello");
//    helloGreeting("Franco");  --> Devolverá "Hello Franco, you are number 1"
//    helloGreeting("Toni"); --> Devolverá "Hello Toni, you are number 2"
// IMPORTANTE: Prestar atención a los espacios, comas y demás caracteres ya que tiene que el string
// debe coincidir en todos sus caracteres para que el test pase correctamente



function closureGreeting(prefix) {
  // Vamos que se puede!!!
 
}


/*
04. Ejercicio recursividad
Busca a Manolo. Donde en una serie de objetos anidados hay un tipo que se llama
"Manolo". Debemos retornar la edad del tal Manolo
*/
function search_manolo(obj){
    return 44
}
console.log(search_manolo(obj_test))




/*
05. Ejercicio LinkedList
un ejercicio de linkedlist, que diga de eliminar un nodo de un vagon de trenes, 
el tren tiene 4 vagones, pide eliminar el 3ero y volver a unir el 4to al 2do
*/

/*
06. Ejercicio Tree
ejercicio de tree, teniendo un binary serch tree con las temperaturas de 6 provincias 
de arg en este momento, ordenados de norte a sur y la primera es la root (Jujuy 34), 
y luego ordenarlos en forma de binary search tree. Provincias: chaco 32, cordoba 31, 
santa fe 20, rio negro 18 y santa cruz 2
Retornar cual es la provincia mas calurosa
*/
function max_temp(tree){
  return "Rio Negro"
}
console.log(max_temp(arbolito))

module.exports = {
    apilar_lompa_repetidos,
  };