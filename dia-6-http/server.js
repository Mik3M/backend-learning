const http = require('http');

const server = http.createServer((req, res) => {
  // SIEMPRE definimos el tipo de contenido al inicio
  res.setHeader('Content-Type', 'text/plain');  

  if (req.url === '/') {
    res.end('Inicio 🏠');
  } 
  else if (req.url === '/contacto') {
    res.end('Página de contacto 📞');
  } 
  else if (req.url === '/about') {
    res.end('Sobre nosotros 📘');
  }
  else {
    res.statusCode = 404; // Solo un 404 al final
    res.end('Página no encontrada ❌');
  }
});

server.listen(3000, () => console.log('Servidor en puerto 3000 🚀'));
