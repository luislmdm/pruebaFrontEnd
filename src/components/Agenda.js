import React from 'react';
import icoMsg from "./../img/icoMsg.svg"
import icoPhone from "./../img/icoPhone.svg"
import icoDot from "./../img/icoDot.svg"





const Agenda = ({clientesLlamadas,clientesFiltro, cargando}) => {
 

  return (
  <div className='agenda'>
    <div className='headerAgenda'>
      <h5>Conexiones de agenda para hoy</h5>
    </div>
    {cargando ? (<div className="sk-fading-circle">
      <div className="sk-circle1 sk-circle"></div>
      <div className="sk-circle2 sk-circle"></div>
      <div className="sk-circle3 sk-circle"></div>
      <div className="sk-circle4 sk-circle"></div>
      <div className="sk-circle5 sk-circle"></div>
      <div className="sk-circle6 sk-circle"></div>
      <div className="sk-circle7 sk-circle"></div>
      <div className="sk-circle8 sk-circle"></div>
      <div className="sk-circle9 sk-circle"></div>
      <div className="sk-circle10 sk-circle"></div>
      <div className="sk-circle11 sk-circle"></div>
      <div className="sk-circle12 sk-circle"></div>
      </div>)
      :  
    <table>

       <tbody>
         {clientesFiltro === 'No hay resultados' ? <tr><td>No Hay resultados</td></tr>:
          (clientesFiltro.length === 0 ? clientesLlamadas.map(cliente =>
          <tr
          key={cliente.id}
          >
            <td className={`td-${cliente.primary_attr}`}></td> 
            <td>{cliente.localized_name}</td>
            <td>LLamar <br/> <span className='span'>Descuento temportada</span> </td>
            <td><img src={icoDot}></img></td>
            <td><img src={icoPhone} ></img></td>
            <td><img src={icoMsg}></img></td>            
          </tr>
          )
          :
          clientesFiltro.map(cliente =>
            <tr
            key={cliente.id}
            >
              <td className={`td-${cliente.primary_attr}`}></td> 
              <td>{cliente.localized_name}</td>
              <td>LLamar <br/> <span className='span'>Descuento temportada</span> </td>
              <td><img src={icoDot}></img></td>
              <td><img src={icoPhone} ></img></td>
              <td><img src={icoMsg}></img></td>            
            </tr>
            )
          )}
      </tbody>
    </table>}
    
</div>
  )};

export default Agenda;
