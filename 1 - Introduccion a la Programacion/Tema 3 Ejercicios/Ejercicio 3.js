// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
let numeroIf = 5;
if (numeroIf > 0) {
    console.log("El número es positivo"); 
} else if (numeroIf < 0) {
    console.log("El número es negativo"); 
} else {
    console.log("El número es 0");    
}

// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
let numeroWhile = 0;
while (numeroWhile < 3) {
    numeroWhile++;    
    console.log(numeroWhile); 
}

//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
let numeroDoWhile = 0;
do {
    numeroDoWhile++;  
    console.log(numeroDoWhile);   
} while (numeroDoWhile < 3);

//Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    console.log(numeroFor);   
}

//Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
let estacion = "otoño";
switch (estacion) {
    case "primavera": 
    console.log("La estación es primavera");
    break;
    case "verano":    
    console.log("La estación es verano");
    break;
    case "otoño": 
    console.log("La estación es otoño");
    break;
    case "invierno":  
    console.log("La estación es invierno");
    break;
    default:  
    console.log("La estación no es válida");
}
