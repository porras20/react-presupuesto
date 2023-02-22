import React, { useState, useEffect } from 'react'
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Pregunta } from './components/Pregunta';



function App() {

  //Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(()=>{
    if (crearGasto) {
      setGastos([...gastos, gasto]);
    }

    //Restar del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad
    setRestante(presupuestoRestante)

    //Resetear a false
    setCrearGasto(false)
  },[gasto])


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={setPresupuesto}
              guardarRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                setGasto={setGasto}
                setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
