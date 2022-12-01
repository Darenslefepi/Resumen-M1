"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivot = Math.floor(array.length / 2);
  console.log(pivot);
  console.log(array[pivot]);
   //                    p
  let left = [];  //  0  1  2  
  let right = []; // [5, 1, 4]
  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[i] <= array[pivot]) {
        left.push(array[i]);
      }else {
        right.push(array[i]);
      }
    }   //                                                   []      4   [5]
  }//                      []                   1            quickSort([5,4])
  const result = quickSort(left).concat(array[pivot]).concat(quickSort(right))
  return result;
}
console.log(quickSort([5, 1, 4])); //.toEqual([1, 4, 5]);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  if (array.length <= 1) return array;
  let num_medio = Math.floor(array.length / 2);
  let left = array.slice(0, num_medio)
  let right = array.slice(num_medio)
  console.log(left)
  console.log(right)
  return merge(mergeSort(left), mergeSort(right)) // -> [1,4,5]
}
                           //   il        ir
function merge(left,right){ // [4, 5]  [1]
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
// No modificar nada debajo de esta línea
// --------------------------------
/*





                     [4,5]
  
merge([4,5],[1])    [1,4,5]
mergeSort[5, 4, 1]       [5, 4]  [1]  


*/
module.exports = {
  quickSort,
  mergeSort,
};
