/*
QUICK
pivote array[0]   array[array.length-1]  Math.floor(array.length/2)

const array = [6, 8, 33, 11, 12, 2, 7]

1. pivote array[0]
2. <= left  y > right
                 left      pivote        right 
                 [2]      6  quick( [8,33,11,12,7] )  
                                    [7]    8  quick([33,11,12])
                                                    quick([11,12]    33  []
                                                           11 [12]


            function quick (arr){}

[1,2,3,4,11,9,10,12]

1  2,3,4,11,9,10,12]
   2  3,4,11,9,10,12]
     

*/

/*
QUICK
recursión
pivote
divide y ordena
junta y enjoy!!!

MERGE
recursión
divide
ordenar y juntar
enjoy!!!

*/

/*
MERGE

[3,5,2,1]
[3,5]  [2,1]
[3] [5]  [2] [1]

[3,5]  [1,2]

[1,2,3,5]

                          [1 ,2 ,4 ,5 ,8 ,9  ]
                [2 ,4 ,9 ]                    [1 ,5 ,8 ]
              [2 ,9 ]     [4]             [1 ,5 ]    [8]
            [9]   [2]                [5]  [1]

    function 

*/

/*

*/

/*
Definir las funciones recursivas nFactorial 
nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número 
natural, su factorial (representado como n!) es el producto de n por todos los 
números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

*/

function nFactorial(n) {
  if (n < 0) {
    return 0;
  } else if (n === 1 || n === 0) {
    console.log("else if", n);
    return 1;
  }
  console.log("in recursion", n);
  return n * nFactorial(n - 1);
}

console.log(nFactorial(3));
/*




nFactorial(3) 3 * 2 -> 6

*/
