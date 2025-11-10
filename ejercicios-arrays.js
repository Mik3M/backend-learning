/*
const users = [
  { name: "Ana", age: 25 },
  { name: "Luis", age: 30 },
];
const mayores = users.filter(u => u.age > 26);
console.log(mayores); // [{ name: "Luis", age: 30 }]

const productos = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
];
const baratos = productos.filter(p => p.precio < 50);
console.log(baratos);

const numeros = [10, 20, 30, 40];
const suma = numeros.reduce((total, actual) => total + actual, 0);
console.log(suma); // 100

const persona = { nombre: "Ana", edad: 25 };
const personaActualizada = { ...persona, edad: 26 };
console.log(personaActualizada); // { nombre: "Ana", edad: 26 }

const usuario = { nombre: "Carlos", edad: 30 };
const { nombre, edad } = usuario;
console.log(nombre); // Carlos
console.log(edad);   // 30
*/

const users = [
  { name: "Dani", age: 25, ciudad: "Bogota" },
  { name: "Miguel", age: 30, ciudad: "Cali" },
];
const city = users.filter(u => u.ciudad == "Cali");
console.log(city); // [{ name: "Luis", age: 30 }]

const nombres = users.map(p => p.name);
console.log(nombres);

const promedioEdad = users.reduce((acumulador, persona) => acumulador + persona.age, 0) / users.length;
console.log(promedioEdad);
