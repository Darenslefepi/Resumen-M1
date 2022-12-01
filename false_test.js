const { apilar_lompa_repetidos } = require("./Repaso_M1_Parte2");
const { Stack } = require("./WS"); //
const pila = new Stack();
pila.enqueue(18);
pila.enqueue(21);
pila.enqueue(18);
pila.enqueue(14);
console.log(pila);
const result_pila = new Stack();
result_pila.enqueue(18);
result_pila.enqueue(18);

function check_apilar_lompa_repetidos() {
  const res = apilar_lompa_repetidos(pila);
  if (res.array[1] === result_pila.array[1]) {
    return "si";
  }
}
console.log(check_apilar_lompa_repetidos(pila));
