const fs = require('fs');

// Leer argumentos desde la consola
const [,, cmd, ...args] = process.argv;

// Leer archivo tareas.json
let tareas = [];

try {
  const data = fs.readFileSync('tareas.json', 'utf-8');
  tareas = JSON.parse(data);
} catch (error) {
  tareas = [];
}

// --- COMANDOS ---

// Agregar tarea
if (cmd === 'add') {
  const texto = args.join(' ');
  const nueva = { id: Date.now(), texto };
  tareas.push(nueva);

  fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
  console.log("✅ Tarea agregada:", texto);
}

// Listar tareas
else if (cmd === 'list') {
  console.log("📋 Lista de tareas:");
  console.log(tareas);
}

// Eliminar tarea (por ID)
else if (cmd === 'delete') {
  const id = Number(args[0]);

  tareas = tareas.filter(t => t.id !== id);

  fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
  console.log("🗑️ Tarea eliminada:", id);
}

// Si no reconoce el comando
else {
  console.log("Comando no reconocido. Usa:");
  console.log(" node app.js add \"tarea\"");
  console.log(" node app.js list");
  console.log(" node app.js delete <id>");
}
