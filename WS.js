const par = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

function Stack() {
  this.array = [];
}

Stack.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Stack.prototype.dequeue = function () {
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.array.length;
};



const obj_test = {
    tipo:"Nada",
    id:3,
    a:{
        tipo:Juan,
        b:{
            s:2,
            tipo:{
                tipo:"Manolo",
                edad: 44,
                x:9,
                d:[]
            }
        }
    },
    w:8
}





function BinarySearchTree(valor,name) {
    this.value = valor;
    this.name = null
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function(value,name) {
  
    if(value < this.value){
      if(this.left === null){
        var newTree = new BinarySearchTree(value,name);
        this.left = newTree;
      } else {
        this.left.insert(value,name);
      }
    } else {
      if(this.right === null){
        var newTree = new BinarySearchTree(value,name);
        this.right = newTree;
      } else {
        this.right.insert(value,name);
      }
    }
  }
  
  BinarySearchTree.prototype.size = function() {
    if(this.value === null){
      return 0;
    }
  
    if(this.left === null && this.right === null){
      return 1;
    }
  
    if(this.left === null){
      return 1 + this.right.size();
    }
  
    if(this.right === null){
      return 1 + this.left.size();
    }
  
    return 1 + this.left.size() + this.right.size();
  }


  const arbolito = new BinarySearchTree(32,"Chaco")
  arbolito.insert(12,"Mendoza")
  arbolito.insert(34,"Rio Negro")
  arbolito.insert(2,"San Luis")
  arbolito.insert(21,"San Juan")
  arbolito.insert(22,"Buenos Aires")



module.exports = {
  Stack,
  par,
  obj_test,
  BinarySearchTree,
  arbolito
};
