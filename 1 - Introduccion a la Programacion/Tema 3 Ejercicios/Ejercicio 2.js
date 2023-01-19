class Coche {
    constructor(puertas) {
        this.puertas = puertas;
    }
    addPuerta() {
        this.puertas++;
    }
}

let miCoche = new Coche(4);
miCoche.addPuerta();
console.log(miCoche.puertas);
