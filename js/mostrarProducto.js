import { conexionAPI } from "./conexionAPI.js"; 

const lista = document.querySelector("[data-lista]")

export default function crearCard(nombre,precio,imagen,id){
    const producto = document.createElement("li");
    producto.className= "producto__item";
    producto.innerHTML=`
            <div class="descripcion-producto">
            <div class="contenedor__imagen">
                 <img src="${imagen}" alt="${nombre}" class="producto__imagen">
            </div>
                 <div class="producto__info">
                        <h3 class="producto__nombre">${nombre}</h3>
                        <div class= "precioyelim">
                        <p class="producto__precio">$${precio}</p>
                        <button class="producto__eliminar" data-eliminar="${id}">
                             <img src="./iconos/eliminar.png" class="eliminar-icon">
                         </button>
                         </div>
                 </div>
            </div>`;

   
const botonEliminar = producto.querySelector(`[data-eliminar="${id}"]`);
    botonEliminar.addEventListener('click', async () => {
        try {
            const confirmar = confirm("¿Estás seguro de eliminar este producto?");
            if (confirmar) {
                await conexionAPI.eliminarProducto(id);
                producto.remove(); // Elimina el elemento del DOM
            }
        } catch (error) {
            alert("No se pudo eliminar el producto.Inténtelo de nuevo.");
            console.error("Error al eliminar:", error);
        }
    });
    
    return producto;
}

async function obtenerProductos() {
    try{
    const listaAPI = await conexionAPI.listarProductos()
    lista.innerHTML="";   

    listaAPI.forEach(producto => 
        lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen,producto.id)));
} catch(error){
    lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
    console.error("Error al obtener productos:", error);
}
}

obtenerProductos();