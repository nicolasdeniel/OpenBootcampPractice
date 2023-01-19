class Persona {
constructor(edad, nombre, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
}
}

// Clase Cliente que hereda de Persona
class Cliente extends Persona {
constructor(edad, nombre, telefono, credito) {
    super(edad, nombre, telefono);
    this.credito = credito;
}
}

// Crea un objeto de la clase Cliente
let cliente = new Cliente(30, "Maria", "555-555-5555", 5000);

// Muestra las propiedades del objeto cliente
console.log(`Edad: ${cliente.edad}`);
console.log(`Nombre: ${cliente.nombre}`);
console.log(`Telefono: ${cliente.telefono}`);
console.log(`Credito: ${cliente.credito}`);

// Clase Trabajador que hereda de Persona
class Trabajador extends Persona {
constructor(edad, nombre, telefono, salario) {
    super(edad, nombre, telefono);
    this.salario = salario;
}
}

// Crea un objeto de la clase Trabajador
let trabajador = new Trabajador(35, "Pedro", "555-555-5555", 30000);

// Muestra las propiedades del objeto trabajador
console.log(`Edad: ${trabajador.edad}`);
console.log(`Nombre: ${trabajador.nombre}`);
console.log(`Telefono: ${trabajador.telefono}`);
console.log(`Salario: ${trabajador.salario}`);
