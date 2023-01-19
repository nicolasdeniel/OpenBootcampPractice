class Persona {
    constructor() {
        this._edad = 0;
        this._nombre = "";
        this._telefono = "";
    }

// Crear gets y sets de cada propiedad.
    get edad() {
        return this._edad;
    }

    set edad(value) {
        this._edad = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }
}

// Crear un objeto persona en el main.
let persona = new Persona();

// Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono
persona.edad = 25;
persona.nombre = "Juan";
persona.telefono = "555-555-5555";

// por último muéstralas por consola.
console.log(`Edad: ${persona.edad}`);
console.log(`Nombre: ${persona.nombre}`);
console.log(`Teléfono: ${persona.telefono}`);
