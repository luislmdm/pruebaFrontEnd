import React from 'react';
import axios from 'axios';


const NavClientes = ({clientesdb, setClienteId, setCargando, setDatosCliente, cargando}) => {

   
  const handleOnClick = async (id) => {
    const respuesta = await axios.get(`https://api.opendota.com/api/players/${id}`)
    setClienteId(respuesta.data)
    setDatosCliente(respuesta.data.profile)
    setCargando(true)
    
    
}
    
    
  return (   
    <div className='list'>
      <nav>
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
        
        clientesdb.map(cliente =>  
         <ul         
          key={cliente.account_id}
          id={cliente.account_id}
          avatar={cliente.avatar}
          onClick={() => handleOnClick(cliente.account_id)}
        >
          <img src={cliente.avatar} alt='avatar' />        
          {cliente.personaname}
        </ul>   
        ) 
            
}
      </nav>
      </div> 
  )};

export default NavClientes;
