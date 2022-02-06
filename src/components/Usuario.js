import React,{useState, useEffect} from 'react';

const Usuario = ({datosCliente, cargando, setCargando}) => {
   const [nombre, setNombre]=useState({})

    useEffect (()=>{
        if (cargando)
        setNombre(datosCliente)
        setCargando(false) 
         
        
    },[cargando])
   
 const {name, account_id, avatarfull, last_login} = nombre   
 

//    console.log(datosCliente.name.length)
    

  

  return (
  <div>
      <img src={avatarfull} />
    <h1>{name ? name : null} </h1>
    </div>
  )};

export default Usuario;
