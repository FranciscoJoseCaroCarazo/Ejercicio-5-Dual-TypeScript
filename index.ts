// Tipad
// Para determinar el tipo de los parámetros de la función, debes dar por hecho que los tipos van a ser siempre los de las dos variables que se añaden en la llamada de la linea 20.

//Tipamos las Variables
let a: number;
let b: string;
let c: boolean | number;

//Se asignan valores a las variables
a = 5;
b = "texto";
c = true;

//If que sobreescribe el valor de la variable c
if (Math.random() >= 0.5) {
  c = 100;
}

//funcion que devuelve si param2 es del mismo tipo
function d(param1: number, param2: number | boolean):number|string {
  if (typeof param2 === "number") {
    return param1 + param2;
  } else {
    return "el segundo parámetro no es un número";
  }
}

//Imprimimos por consola el resultado
console.log(d(a, c));
