const fs = require('fs');

// Leer archivo
const contenido = fs.readFileSync('mensaje.txt', 'utf8');

// Escribir un archivo nuevo con lo leído
fs.writeFileSync('copia.txt', 'Copia del mensaje: ' + contenido);

console.log('Archivo leído y copiado');
