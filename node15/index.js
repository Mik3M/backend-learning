const express =  require("express");
const app = express();
const port = 3127;

app.use(express.json());

//datos de prueba
let videojuegos = [
    {id: 1, titulo: "juego 1" precio: 20},
    {id: 2, titulo: "juego 2" precio: 20},
    {id: 3, titulo: "juego 3" precio: 20},
    {id: 4, titulo: "juego 4" precio: 20},
    {id: 5, titulo: "juego 5" precio: 20}
];

app.get("")

app.listen(port, () => {
    console.log("servidor de node escuchando en http://localhost:"+port);
});