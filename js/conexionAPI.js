async function listarProductos() {
    const conexion = await fetch ("http://localhost:3001/productos");

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function enviarProductos(nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/productos", {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
            id: new Date().getTime()
        })
    });
   
    const conexionConvertida= await conexion.json();

    if(!conexion.ok){
        throw new Error ("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });
    
    if(!conexion.ok) {
        throw new Error("No se pudo eliminar el producto");
    }
    return conexion.json();
}

export const conexionAPI={
    listarProductos,enviarProductos,eliminarProducto
   
}
