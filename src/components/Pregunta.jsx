import React, { useState } from 'react'
import Error from './Error'

export const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    const [cantidad, setCantidad]  = useState(0);
    const [error, setError] = useState(false)
    
    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    }

    //Agregar Presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        if (cantidad < 1 || isNaN ( cantidad )) {
            setError(true)
            return;
        }
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false) 
    }
    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto'/> : null}
            <form action="" 
                onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input 
                type="submit" 
                className='button-primary u-full-width'
                value="Definir presupuesto"
                />
            </form>
        </>
     );
}