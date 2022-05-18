import React from 'react';
import Botonmenu from './botonMenu';
import Botonprecio from './botonPrecio';
import Botoncontador from './botonContador';

const Menu = () => {
    return (
        <div>
            <Botoncontador />
            <Botonprecio />
            <Botonmenu />
        </div>
    );
}

export default Menu;
