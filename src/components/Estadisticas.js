import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Estadisticas = () => {
  const leads = 60
  const llamadas = 40
  const matriculas = 50

  const leadsObtenidas = `${leads}/100`
  const colaLlamadas = `${llamadas}/100`
  const matriculasFinalizadas = `${matriculas}/100`

   const porcentaje = (leads + llamadas + matriculas)/3

  return (
  
    
     <div className='ruedita'>
     <CircularProgressbar
                    styles={buildStyles({
                      
                        pathColor: porcentaje === 100 ? '#DC2626' : '#f74f31',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje === 100 ? '#DC2626' : 'black',
                        
                         
                        
                      })}
                    value={porcentaje}
                    text={`${porcentaje}%`}
               ></CircularProgressbar> 
    

    <div className='estadistica'>
        <div className='datos'>
           <h6>Leads obtenidos</h6>
           <p>{leadsObtenidas}</p>
           
        </div>

        <div className='datos'>
           <h6>Cola de llamados</h6>
           <p>{colaLlamadas}</p>
          
        </div>

        <div className='datos'>
           <h6>Matriculas finalizadas</h6>
           <p>{matriculasFinalizadas}</p>
        </div>
          
    </div>

      
  </div>
  
  )
};

export default Estadisticas;
