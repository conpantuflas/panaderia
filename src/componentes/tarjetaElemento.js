import React from 'react';
import "../estilos/tarjetasElementos.css"

const Tarjetaelemento = (props) => {
    return (
            <div id="padre" name="targeta" >
                <img id="imagen" src={props.src}  alt="imagen" />
                    <div id="hijo" >
                        <h2 id="titulo">{props.titulo}</h2>
                        <p id="descripcion">{props.descripcion}</p>
                        <p id="precio">{props.precio}</p>
                        <button id="boton" href="#" >Añadir </button>
                    </div>
            </div>
    );
}

export default Tarjetaelemento;
