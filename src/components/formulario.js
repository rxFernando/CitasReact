import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid';

const Formulario = ({ crearCita }) => {
    //crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',


    })
    //segundo state
    const [error, actualizarError] = useState(false)
    //funcion que se ejecuta cada que un usuario cambia input
    const handleChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita
    //cuando se envie el formulario
    const submitCita = (e) => {
        e.preventDefault();
        //validar datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return
        }
        actualizarError(false)

        //asignar id

        cita.id = uuid();
        console.log(cita)



        //crear cita
        crearCita(cita)

        //reiniciar form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',

        })
    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error
                    ?
                    <p className="alerta-error">Completa todos los campos</p>
                    :
                    null
            }
            <form onSubmit={submitCita}>
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={propietario}
                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}

                />
                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}

                />
                <label htmlFor="">Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >


                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}>
                    Agregar Cita
                </button>

            </form>
        </Fragment>);
}

export default Formulario;