import { conexionAPI } from "./conexionAPI.js";
import {obtenerProducto} from "./mostrarProducto.js";

const formulario = document.querySelector("[data-formulario");

async function crearProducto(evento){

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
   await conexionAPI.enviarProductos(nombre,precio,imagen);
    alert("Producto creado con éxito");
    formulario.reset(); 

        await obtenerProducto();

} catch (e) {
   alert(e);
}
}

formulario.addEventListener ("submit",evento => crearProducto (evento));
