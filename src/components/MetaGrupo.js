import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'



const MetaGrupo = () => {

  const leadsObtenidos = 50

  const matriculasRealizadas = 60

  const leadsGrupo = 400
  const matriulasGrupo=100

  return (
    <>
    <h3>Meta grupal</h3>
      
    <div className='meta'>
      <div>
          <label>Leads obtenidos</label>  
          <p>{leadsObtenidos}/{leadsGrupo}</p>
      </div>    
      <ProgressBar now={leadsObtenidos} />
    </div>

    <div className='meta'>
      <div>
        <label>Matriculas realizadas</label>
        <p>{matriculasRealizadas}/{matriulasGrupo}</p>
      </div>  
    <ProgressBar now={matriculasRealizadas} />
    </div>

    
    </>
    
    )};

export default MetaGrupo;
