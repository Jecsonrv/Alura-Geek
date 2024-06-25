import { conexionAPI } from "./conexionAPI.js";
import { agregarEventoEliminar } from "./borrarProducto.js";

const lista = document.querySelector("[data-lista]");
const mensajeVacio = document.createElement("h3");
mensajeVacio.textContent = "Aún no se han agregado productos";
mensajeVacio.className = "mensaje-vacio";

function crearCard(id, nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "producto__item";
    producto.innerHTML = `<img class="producto__imagen" src="${imagen}" />
                    <div class="producto-container--info">
                        <p>${nombre}</p>
                        <div class="producto-container--value">
                            <p>${precio}</p>
                            <img src="./images/basurero.png" class="icono__basurero" data-id="${id}"/>
                        </div>
                    </div>`;

    agregarEventoEliminar(producto);


    return producto;

}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();
    lista.innerHTML = "";

    if (listaAPI.length === 0) {
        lista.appendChild(mensajeVacio);
    } else {
        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)));
    }
}

listarProductos();