import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita';


function App() {

  //citas en lS
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }

  //arreglo de citas
  const [citas, guardarCitas]= useState(citasIniciales)
  //funcion que modifique cita
  const crearCita = cita=>{
    guardarCitas([
      ...citas,
      cita
    ])
    console.log(cita)
  }

  const eliminarCita = (id)=>{
    const newCitas = citas.filter(cita=>cita.id!==id)
    guardarCitas(
      newCitas
    )
  }
  ///mensaje condicional 
  const mensaje = citas.length ===0 ? 'No hay citas':'Administra tus citas';
  useEffect(()=>{
    if(citasIniciales){
      console.log('SI  HAY')
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas, citasIniciales])

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{mensaje}</h2>
            {citas.map(cita=>
              (
                <Cita
                cita={cita}
                key={cita.id}
                eliminarCita={eliminarCita}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
