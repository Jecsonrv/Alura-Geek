async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida;

    // console.log(conexionConvertida)
}

async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function borrarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    return conexion.ok;
}


export const conexionAPI = {
    listarProductos, enviarProducto, borrarProducto
}
