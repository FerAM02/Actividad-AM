var numeros = [];
var resultado = 0;

var cantidad = prompt("Cuantos numeros quieres usar para la operacion", "");

for (let i = 0; i<= cantidad; i++){
    var x = prompt("Ingresa el numero:","");

    numeros[i].push(x);
}

function Suma(){
    for (let i = 0; i<numeros.length; i++){
        var resultado = resultado + numeros[i];
    }
    document.write(Suma)
}
Suma();

function Resta(){
    for (let i = 0; i<numeros.length; i++){
        var resultado = resultado - numeros[i];
    }
}

function Division(){
    for (let i = 0; i< numeros.length; i++){
        var resultado = resultado / numeros[i];
    }
}

function Multiplicacion(){
    for (let i = 0; i<numeros.length; i++){
        var resultado = resultado * numeros[i];
    }
}