import React,{ useEffect, useState } from 'react';
import Tarjetaelemento from './tarjetaElemento';

import integral from "../archivos/integral.jpg";
import baggett from "../archivos/baggett.jpg";
import panajo from "../archivos/panajo.jpg";
import pancanela from "../archivos/pancanela.jpg";
import panconcha from "../archivos/panconcha.jpg";
import panleche from "../archivos/panleche.jpg";

import style from  '../estilos/carruselPanaderia.module.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';



const Carruselpanaderia = () => { 
    const [contador, setContador] = useState(4)
    useEffect(()=>{
        const nombres = document.getElementsByName("targeta")
        let prueba = [nombres]
        for(let element of nombres) {
            prueba.push(element)
        }
        for( let a = 0; a < nombres.length; a++){
            if(a < contador){
                nombres[a].style.display='block'
            } else { 
                prueba.unshift(nombres[a])
                nombres[a].style.display='none' 
            }
            // console.log(nombres[a])
        }
        console.log(prueba)
    })

    return (
        <div className={style.padre}>
            <button 
            onClick={()=>{
                setContador(contador -1)
                console.log('menos')
            }}
            className={style.botones}>b</button>
            <Tarjetaelemento
                src={integral}
                titulo="Pan Integral"
                descripcion="800g"
                precio="$1.990"
            />
            <Tarjetaelemento
                src={baggett}
                titulo="Pan Baggett"
                descripcion="1kg"
                precio="$1.990"
            />
            <Tarjetaelemento
                src={panajo}
                titulo="Pan de Ajo"
                descripcion="800g"
                precio="$2.590"
            />
            <Tarjetaelemento
                src={pancanela}
                titulo="Pan de Canela"
                descripcion="600g"
                precio="$1.990"
            />
            <Tarjetaelemento
                src={panconcha}
                titulo="Pan Concha"
                descripcion="600g"
                precio="$1.990"
            />
            <Tarjetaelemento
                src={panleche}
                titulo="Pan de Leche"
                descripcion="800g"
                precio="$2.790"
            />
            <button
            onClick={()=>{
                setContador(contador +1)
               console.log('mas')
            }}
            className={style.botones}>b</button>
        </div>
    );
}

export default Carruselpanaderia;

