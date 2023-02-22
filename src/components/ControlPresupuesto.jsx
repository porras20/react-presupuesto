import React from 'react'
import { revisarPresupuesto} from '../helpers'

export const ControlPresupuesto = ({presupuesto, restante}) =>{
    return(
        <>
            <div className="alert-primary m-2">
                Presupuesto: {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: {restante}
            </div>
        </>
    )
}