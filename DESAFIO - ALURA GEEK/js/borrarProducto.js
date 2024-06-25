import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(id, elemento) {
    const resultado = await conexionAPI.borrarProducto(id);
    if (resultado) {
        elemento.remove();
    } else {
        console.error(`Error al eliminar el producto con ID ${id}`);
    }
}

export function agregarEventoEliminar(producto) {
    const botonEliminar = producto.querySelector(".icono__basurero");
    botonEliminar.addEventListener("click", () => {
        const idProducto = botonEliminar.getAttribute("data-id");
        eliminarProducto(idProducto, producto);
    });
}


