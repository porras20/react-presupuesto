import React, { useState } from 'react'
import shortid from 'shortid';
import Error from './Error';

export const Formulario = ({setGasto, setCrearGasto}) =>{

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    

    const agregarGasto = e => {
        e.preventDefault();
        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false)
        //Construir el gasto
        const gasto = {
           nombre,
           cantidad,
           id: shortid.generate()
        }
        
        //Pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)

        //Resetear el form
        setCantidad(0)
        setNombre('')
    } 
    return (
      
        <form action="" onSubmit={agregarGasto}>
          <h2>Agrega tus gastos aquí</h2>
          {error ? (
            <Error mensaje="Todos los campos son obligatorios o agregue un presupuesto valido" />
          ) : null}
          <div className="campo">
            <label htmlFor="">Nombre gasto</label>
            <input
              type="text"
              className="u-full-width"
              placeholder="Ej: Transporte"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="">Cantidad gasto</label>
            <input
              type="text"
              className="u-full-width"
              placeholder="Ej: 300"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <input type="submit" className="button-primary u-full-width" />
        </form>
    );
}