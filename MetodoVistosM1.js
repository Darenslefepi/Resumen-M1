//01 - LINEA 17 (INTRO TO CS)
//-  BINARIO A DECIMAL
//-  DECIMAL A BINARIO

//02 - LINEA 86 (JASVA SCRIPT AVANZADO I)
//-  APRENDER DE LA SINTAXIS, GLOBAL Y DEMAS CONCEPTOS

//03 - LINEA 289 (JASVA SCRIPT AVANZADO II)
//-  Closures (cláusulas).
//-  Objeto `this`.
//-  Métodos de funciones.

//04 - LINEA 421 (ESTRUCTURA DE DATOS I)
//-  RESURSION
//-  STACKS
//-  QUEUES

//05 - LINEA 608 (ESTRUCTURA DE DATOS II)
//-  Listas enlazadas.
//-  Hash table.

//06 - LINEA 755 (ESTRUCTURA DE DATOS III)
//-  Árboles binarios.
//-  Árboles binarios de búsqueda.
//-  Recorridos.

//07 - LINEA 893 (ALGORITMOS I)
//-  Pseudocódigo.
//-  Algoritmos.
//-  Eficiencia.
//-  Complejidad - Big O Notation.
//-  Bubble Sort.
//-  Insertion Sort.
//-  Selection Sort.

//08 - LINEA 1019 (ALGORITMOS II)
//-  Quick sort.
//-  Merge sort.


//CLASE INTRO TO CS
// **Ejercicio 1: BinarioADecimal** 

function BinarioADecimal(num) {
    console.log("num",num)
    console.log("num",num.length-1)
    let decimal = 0;
    for (let i = 0; i < num.length; i++) {
       //console.log(num)
       decimal += num[i] * 2 ** (num.length - 1 - i);
       //decimal sera igual al resultado de la operacion, 
    }
    return decimal;
    }
    console.log(BinarioADecimal("100"))
    
//**Ejercicio 2: DecimalABinario**

    function DecimalABinario(num) {
    
       let binario = ""; 
    //la declaro como un string vacio para que esta tome el valor resultante de while
       //console.log(binario)
       let dividido = num; 
       while (dividido > 0) {
          console.log(dividido)
          //while es un buque infinito que se repite hasta que cumpla la condicion 
          binario = dividido % 2 + binario; 
          dividido = Math.trunc(dividido / 2); 
          console.log(binario)
          //Math.trunc devuelve el numero entero sin tener encuenta ningun decimal
       }
        
    return binario; 
    }
    console.log(DecimalABinario(9))
    console.log(this)
    
    var result = 9 + dado
    console.log(result)
    
    console.log(dado)
    var dado = 9
    console.log(dado)
    
    //console.log(dado2)
    let dado2 = 10
    console.log(dado2)
     function casual(a) {
       return function() {
          return "chau"
       }
     }
     var tres = casual()
     console.log(casual())
     console.log(tres)
    
     const obj_origin = {
       a: 2,
       b: 3
     }
    const copiobj_origin = {...obj_origin}
    copiobj_origin.a = 15
     console.log(obj_origin)
     console.log(copiobj_origin)

//----------------------------------------------------------------------------------------

//CLASE 02-JAVAsCRIPTaVANZADO
//CLASE SIN FUNCIONES PARA HACER SOLO COMPROBAR QUE DEBERIA DAR COMO RESULTADO

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

//```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
//```

//```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
var baz = 2;
//```

//```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
//```

//```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
//```

//```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
//```

/*### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:
*/
//```javascript

6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN (todo signo diferente a + que concatena dara como resultado No a number)
7 / 0 //Infinito
{}[0] //Indefinido
console.log({}[0])
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] // Concatena 3 + 3 = 33, despues se resta 10 = 23
3>2>1 // (3 > 2 = True == 1 > 1 = False
//[] == ![] // True
/*```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
*/

function test() {
   console.log(a); // ya que ha esta instancia a no habia sido definido pero si ocupa un lugar al estar mas abajo
   console.log(foo()); // al configurar el return me da este valor

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
/*```

Y el de este código? :

```javascript
*/

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      let snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
console.log(getFood(false))
console.log(snack)
/*```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
*/

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
/*```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
*/
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
//```
console.log(this); 

var dado = 9

console.log(dado); 

//------------------------------------------------------------------------------

//03 -JAVASsCRIPTaVANZADO
// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
    var contador = 0 //Generamos la variable que llevara la cuenta en valor inicial 1
    return function () { //para que se cree el closures debemos dentro de esta funcion retornar otra funcion 
      contador++  // donde al contador se le ira sumando y guardando en memoria el resultado para un proximo evento iniciar desde el ultimo valor
      console.log(contador)
      return contador // retornamos el valor para que se cree el contador
    } 

}
const hamburguesas = counter() //Generamos una nueva variable con var, let o const y cualquier nombre segun lo que queramos contar
const completo = counter()
console.log(hamburguesas())
console.log(hamburguesas())
console.log(hamburguesas())
console.log(completo())
console.log(hamburguesas())
console.log(completo())

// arriba se muestran los respectivos console.log y se demuestra que estan llevando la cuenta a partir de 1

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar 
el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) 
de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, 
  podés usar hasOwnProperty) */

  function cacheFunction(cb) {
    const cache = {}; 
    return function(num) {
      if(cache.hasOwnProperty(num))  return cache[num] 
        cache[num] = cb(num); 
        return cache[num];
    }
  }
  function multi_two(x) {
    return x * 2; 
  }
const plantilla1 = cacheFunction(multi_two)
plantilla1(6)
plantilla1(5)
console.log(plantilla1(5))
console.log(plantilla1(5))
console.log(plantilla1(7))
/*
var cache = {};
	return function(x) {
		if (cache.hasOwnProperty(x)) return cache[x];
		cache[x] = cb(x);
		return cache[x];
*/

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() { //Como nos pide obtener los nombres respectivos generamos la function getNombre
  return this.nombre //la retornamos con this para que tome los valores deseados
}
  
/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/


let getNombreInstructor = getNombre.bind(instructor);//aqui el codigo estaba vacio y por tanto siempre daba error, solo bastaba colocar el parametro instructor y alumno y ya paso el test
let getNombreAlumno = getNombre.bind(alumno);


console.log(getNombreInstructor())
console.log(getNombreAlumno())

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorDerecha + cadena + delimitadorIzquierda; 

}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

console.log(textoAsteriscos("hola"))
console.log(textoGuiones("hola"))
console.log(textoUnderscore("hola"))

//---------------------------------------------------------------------------------------

//04 ESTRUCTURA DE DATOS

/*
Definir las funciones recursivas nFactorial y nFibonacci.
​
nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
​
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
​
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
​
​
Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) { //!3 ->3x2x1 -> 6
    /* if (n > 0) {
        //return;
    }*/
    if (n === 0) {
        return 1;
    }
    return n * nFactorial(n - 1);
  }
  
  console.log(nFactorial(5))
  console.log(nFactorial(3))
  
  /*
  function myFirsRecursion(num, NumBreak) {
      if (NumBreak === 0) return "Bye Baby"
      console.log(num)
      num++
      NumBreak--
      return myFirsRecursion(num, NumBreak);
  }
  console.log(myFirsRecursion(1, 9))
  
  function secunRecursi(n) {
      if(n > 0) {
          console.log(n)
          return n+ secunRecursi(n - 1); 
      }
  
      return n; 
  }
  console.log(secunRecursi(3)); 
  */
  
  
  function nFibonacci(n) { //0 1 1 2 3 5 8 13 21 34
  
     if(n < 2) return n
     return nFibonacci(n -1) +nFibonacci(n - 2)
    /* let fibo = {}
     if(fibo[n]) return fibo[n];
     if(n < 2) return n; 
     fibo[n] = nFibonacci(n - 1) + nFibonacci(n - 2); 
     return fibo[n];*/
     }
  
     console.log(nFibonacci(4))
  
  /*
  Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
    - enqueue: agrega un valor respetando el orden.
    - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
    - size: retorna el tamaño (cantidad de elementos) de la queue.
  ​`/^_ca}♪}{}|Ç'`\/
  Pueden utilizar class o función constructora.
  */
  
  function Queue() {
     this.array = [];
  }
  const newarr = new Queue()
  Queue.prototype.enqueue = function(value) {
     return this.array.push(value)
  }
  Queue.prototype.dequeue = function() {
     return this.array.shift()
  }
  Queue.prototype.size = function() {
     return this.array.length
  }
  
  const newQueue = new Queue(); 
  //newQueue.nuevapro = 5
  newQueue.enqueue({a: 3})
  newQueue.enqueue({a: 3})
  newQueue.enqueue({a: 3})
  newQueue.enqueue(5)
  newQueue.dequeue(5)
  console.log(newQueue.size())
  console.log(newQueue)
  console.log(Queue)
  //console.loqg(queue())
  
  /*
  Definir las funciones recursivas nFactorial y nFibonacci.
  
  nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número 
  natural, su factorial (representado como n!) es el producto de n por todos los 
  números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
  
  nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando 
  al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo 
  que cualquier elemento que se agregue a esta secuencia será el resultado de la suma 
  del último elemento y el anterior.
  Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 
  7 de la secuencia.
  
  Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
  
  
  Como ejercicio adicional y completamente opcional, al terminar de resolver este 
  problema pueden intentar definir funciones que logren los mismos resultados pero 
  de manera iterativa.
  
  
  function nFactorial(n) {
    if (n < 0) {
      return 0;
    } else if (n === 1 || n === 0) {
      return 1;
    }
    return n * nFactorial(n - 1);
  }
  
  // num FiB ---> 0 1 1 2 3 5 8 13  21
  //  pos  -----> 0 1 2 3 4 5 6  7  8
  function nFibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    return nFibonacci(n - 2) + nFibonacci(n - 1);
  }
  console.log(nFibonacci(6));
  
  /*
  Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el 
  primer elemento que ingresa es el primero que se quita. Definir los siguientes 
  métodos:
    - enqueue: agrega un valor respetando el orden.
    - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue 
      está vacía.
    - size: retorna el tamaño (cantidad de elementos) de la queue.
  
  Pueden utilizar class o función constructora.
  
  
  // function Queue() {
  //   this.data = []
  
  //   // this._dataPrivada = null
  // }
  class Queue {
    constructor() {
      this.data = [];
    }
    //   size = ()=> {
    //     return this.data.length
    //  }
  }
  
  Queue.prototype.enqueue = function (value) {
    return this.data.push(value);
  };
  Queue.prototype.dequeue = function () {
    if (this.data.length === 0) return undefined;
    return this.data.shift();
  };
  Queue.prototype.size = function () {
    return this.data.length;
  };
  
  const miInstanciaDeQueue = new Queue();
  miInstanciaDeQueue.enqueue({ a: 3 });
  miInstanciaDeQueue.enqueue({ a: 4 });
  // miInstanciaDeQueue.dequeue()
  console.log(miInstanciaDeQueue.size());
  console.log(Queue);
  console.log(miInstanciaDeQueue);

  //-------------------------------------------------------------------------------

  //05 ESTRUCTURA DE DATOS 2

  /* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo 
  cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    this.head = null; 
    this._length = 0; 
     /* this.add = add;
      this.remove = remove;
      this.search = search; */
  }
  
  function Node(value) {
    this.value = value; 
    this.next = null; 
  }
  
  LinkedList.prototype.add = function(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // this.head.next 
    }
      current.next = newNode; 
    
    }
    this._length++;
    return newNode;
  }
  
  LinkedList.prototype.remove = function() {
    let current = this.head;
    if (current === null) return null;
    else if (current.next === null) {
      // (!current.next) // this._length ===1
      this.head = null;
      this._length--;
      return current.value;
    } else {
      while (current.next.next !== null) {
        current = current.next;
      }
      const value = current.next.value; // "hola"
      current.next = null;
      this._length--;
      return value;
    }
  }
  
  LinkedList.prototype.search = function(value) {
    if (this._length === 0) {
      return null;
    }
    let current = this.head;
    if (typeof value === "function") {
      while (current) {
        if (value(current.value)) {
          return current.value;
        }
        current = current.next;
      }
    }
    while (current) {
      if (current.value === value) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }
  const Caballos = new LinkedList()
  Caballos
  console.log(Caballos)
  /* EJERCICIO 2
  Implementar la clase HashTable.
  Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), 
  donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
  Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un 
    poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
  
  La clase debe tener los siguientes métodos:
    - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input 
    (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina 
    la posición de la tabla en la que se almacenará el dato.
    - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
    - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
    - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
  
  Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; 
  luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
  */
  function HashTable() {
    this.buckets = [];
    this.numBuckets = 35;
  }
  HashTable.prototype.hash = function (str) {
    var result = 0;
    for (let i = 0; i < str.length; i++) {
      result = result + str.charCodeAt(i);
    }
    return result % this.numBuckets; // 0 34
  };
  HashTable.prototype.set = function (key, value) {
    if (typeof key !== "string") throw TypeError("Keys must be strings");
    let code = this.hash(key);
    if (this.buckets[code] === undefined) {
      this.buckets[code] = {};
    }
    this.buckets[code][key] = value;
  };
  HashTable.prototype.get = function (key) {
    let code = this.hash(key);
    if (this.buckets[code][key]) {
      return this.buckets[code][key];
    }
  };
  //  expect(hashTable.get('foo')).toBe('bar2');
  HashTable.prototype.hasKey = function (key) {
    let code = this.hash(key);
    if (this.buckets[code][key]) {
      return true;
    } else {
      return false;
    }
  };
  const tablita = new HashTable();
  tablita.hash("foo"); // ).toBe(9);
  tablita.hash("this is a key"); //).toBe(27);
  tablita.hash("what about this one"); //).toBe(13);
  console.log(tablita);

  //------------------------------------------------------------------------------

  //06 ESTRUCTURA DE DATOS III

  /*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
    this.value = value; 
    this.left = null; 
    this.right = null; 
 /* this.root = value; 
    this.left = null;
    this.right = null;  
 }
 function Node(value) {
    this.value = value; 
    this.left = null; 
    this.right = null; 
    */
 }
 // insert node segun BST
 BinarySearchTree.prototype.insert = function (value) {
    if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      // <=
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  };
  
  BinarySearchTree.prototype.size = function () {
    if (this.left === null && this.right === null) {
      // (!this.left && !this.right)
      return 1;
    }
    if (!this.left) return 1 + this.right.size();
    if (!this.right) return 1 + this.left.size();
    if (this.right && this.left) return 1 + this.left.size() + this.right.size();
  };
  BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) return true;
    if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      // <=
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
  };
  // In-order    LVR -> left value rigth
  // testArr = [];
  // depthFirstForEach(function(val){ testArr.push(val); })
  BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
    // in order
    if (!order || order === "in-order") {
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
    } else if (order === "post-order") {
      // post order
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
    } else {
      // Pre-order
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
    }
  };
  // if(this.left !== null){this.left.depthFirstForEach(cb,order)}
  
  /*
  var array_result = [20,15,25,5];
  tree.breadthFirstForEach(function(val){ array_result.push(val); }
  
  En la recursión los datos que creamos y pasamos por params persisten
  array_queue
  */
  
  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array_queue = []) {
    if (this.left) {
     array_queue.push(this.left)
    }
    if (this.right) {
     array_queue.push(this.right)
    }
    cb(this.value);
    if(array_queue.length>0){
     console.log("------> ", array_queue)
     array_queue.shift().breadthFirstForEach(cb,array_queue) // <-
    }
  };
 const tree = new BinarySearchTree(20)
 //20 15 25 5 17
 
 console.log(BinarySearchTree);
 const node1 = new BinarySearchTree(15)
 const node2 = new BinarySearchTree(25)
 const node3 = new BinarySearchTree(5)
 const node4 = new BinarySearchTree(17)
 
 tree.left = node1 //tree.left = new BinarySearchTree(15); 
 tree.right = node2
 tree.left.left = node3
 tree.left.right = node4
 
 console.log(tree);

 //---------------------------------------------------------------------------------------

 //ALGORITMOS I

 function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    
    /*EXPLICACION
    factor = [1, 2, 2, 3, 3, 5]
    divisor = 5  (comenzo en dos y termino en cinco)
    180 | 2
    90  | 2
    45  | 3
    15  | 3
    5   | 5
    1   | 
    */
    
    
    var factor = [1]; 
    var divisor = 2; 
    while (num !== 1) {
      if(num % divisor === 0) {
        factor.push(divisor); 
        num = num / divisor
      } else {
        divisor++
      }
    }
   return factor; 
   
  }
  console.log(factorear)
  
  
  function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
    //............................................
    //va comparando de a 2 valores (i con i +1)
    //si el que esta en la posicion i es mas grande que el de adelante lo intercambia
    //(deberia guardarme en una var aux lo ques esta en i antes de pizarlos)
    //**optimizacion**
    // si detecta que dio una vuelta y no hizo cambios corta!
    //ejemplo
    //expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    //                    i
    //                      i+1
    // aux = 5 despues de la primera vuelta es para que el numero no se pierda
    var bandera = true; 
    while (bandera) {
      bandera = false
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
          var aux = array[i]; 
          array[i] = array[i+1]; 
          array[i+1] = aux; 
          bandera = true; 
        }
      }
    }
    return array
  }
  
  
  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //tengo que ir sacando los valores de mi array y comparando con los de atras
    //lo suelto 0 cuando llegue a la posicion cero
    //0 adelante de un valor mas chico
    //.......................
  
    //[5, 1, 4, 2, 8]
    //    i
    //  j
  for (var i = 0; i < array.length; i++) {
    var j = i - 1; 
    var aux = array[i]; 
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]; 
      j--
    }
    array[j+1] = aux; 
  }
  return array; 
  }
  
  
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //---------------------------------
    //tengo que ir buscando el valor mas chico de mi array
    //para ubicarlo adelante de todo
  
    //[5, 1, 4, 2, 8]
    //  i
    //    j
    // min
    // aux = 5
  
    for (var i = 0; i < array.length -1; i++) {
      var min = i; 
      for (var j = i + 1; j <array.length; j++) {
        if (array[j] < array[min]) {
          min = j
        }
      }
        var aux = array[i]; 
        array[i] = array[min]; 
        array[min] = aux;  
    }
  return array; 
  }
//--------------------------------------------------------------------------------- 

//08 ALGORITMOS II

// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    /*
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    */
    //let arr = [5, 4, 1, 2, 3]
    /*  pivote         1
                      / \
                          [5, 4, 2, 3]                    
                                / \
                                  [5,4,3]
                                    /\
                                  [3][5]
    */
   if (array.length <= 1) return array; 
   var numeroRandom = Math.floor(Math.random()*array.length); 
   let pivote = array[numeroRandom]//1
   var iguales = [] // 1, 2, 
   var derecha = []; //5, 4, 2, 3 // 5, 4, 3//5
   var izquierda = []; //                     //3
    for (var i = 0; i < array.length; i++) {
      if (array[i] < pivote) {
        izquierda.push(array[i])
      } else if (array[i] > pivote) {
        derecha.push(array[i]); 
      } else { 
        iguales.push(array[i])
      }
    }
        return quickSort(izquierda).concat(iguales,quickSort(derecha))
     // Math.floor(order.length/2)
     // console.log(quickSort(5))
  
  }
  
  let order = [5, 4, 1]
      var mita = Math.floor(order.length/2)
      console.log(mita); 
      console.log(Math.floor(order.length/2))
      console.log(order.length-1)
   //-------------------------------------------------------------------   
    /*  
  function merge(arrIzq, arrDer) {
        var arreglo = []
        var elemnet
        while (arrIzq.length || arrDer.length) {
          if (!arrIzq[0]) {
            elemnet = arrDer.shift()
            arreglo.push(elemnet)
          } else if (!arrDer[0]) {
            elemnet = arrIzq.shift()
            arrDer.push(elemnet)
          } 
          else if (arrIzq[0] < arrDer[0]) {
            elemnet = arrIzq.shift()
            arreglo,push(elemnet)
          } else if (arrIzq[0] > arrDer[0]) {
            elemnet = arrDer.shift()
            arreglo,push(elemnet)
        } else {
          elemnet = arrIzq.shift()
          arreglo.push(elemnet)
        }
      }
      return arreglo
      }
      */
  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    /*if (array.length <= 1) return array; 
  
    var medio = array.length/2; 
    var izquierdo = array.slice(0, medio); 
    var derecho = array.slice(medio); 
  
    return merge(mergeSort(izquierdo), mergeSort(derecho)); 
  */
    //okey probemos ahora
    if (array.length <= 1) return array;
    let num_medio = Math.floor(array.length / 2);
    let left = array.slice(0, num_medio)
    let right = array.slice(num_medio)
    console.log(left)
    console.log(right)
    return merges(mergeSort(left), mergeSort(right)) // -> [1,4,5]
  }
  
    function merges(left,right){ // [4, 5]  [1]
    const result_min = [] // [1]
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft<left.length && indexRight< right.length) {
      if(left[indexLeft]<right[indexRight]){
        result_min.push(left[indexLeft])
        indexLeft++
      } else {
        result_min.push(right[indexRight])
        indexRight++
      }
    }            //   [1]        [4, 5]                  []   -> [1,4,5]
    return result_min.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  console.log(mergeSort([10, 2, 7, 4]))// .toEqual([-7, -2, 4, 10]);
  
//-----------------------------------------------------------------------------------------  