import React, {useState, useEffect, Fragment} from "react";
import Estadisticas from "./components/Estadisticas";
import NavClientes from "./components/NavClientes";
import Menu from "./components/Menu";
import Agenda from "./components/Agenda";
import MetaGrupo from "./components/MetaGrupo";
import Plan from "./components/Plan";
// import Usuario from "./components/Usuario";
import icoFilter from "./img/filter.svg"
import axios from "axios";
import {getCurrentDate} from "./helpers/date"





function App() {

  const [clientesLlamadas, setClientesLlamadas] = useState([])
  const [clientesdb, setClientesDb] = useState([])
  const [cargando, setCargando] = useState (true)
  const [date, setDate] = useState(getCurrentDate())
  const [filter, setFilter] = useState('')
  const [clientesFiltro, setClientesFiltro] = useState([])

  

  
   useEffect(() => {
    const url='https://api.opendota.com/api/proPlayers'
    const url2='https://api.opendota.com/api/heroes'
  
    const consultarAPI = async () => {
      const respuesta2 = await axios.get(url2)
      const respuesta = await axios.get(url)
      
     setClientesDb(respuesta.data)
     setClientesLlamadas(respuesta2.data) 
     setClientesFiltro(clientesLlamadas)
     setCargando(false)
   }
     consultarAPI()
   }, [])

   useEffect(() => {
    let nombres = clientesLlamadas.filter(cliente => cliente.localized_name.toLowerCase().trim().includes(filter.toLocaleLowerCase().trim()))

    const aplicarFiltro = () => {

    if (nombres.length===0){
      setClientesFiltro('No hay resultados')
    }else{    
     setClientesFiltro(nombres)
    }
   }
   aplicarFiltro()
   }, [filter])

   const handleOnChangeFilter = (e) => {
       e.preventDefault();
      setFilter(e.target.value)
      
   }

  const handleOnChange = (e) => {
      e.preventDefault();
      setDate(e.target.value)
  }
  

  
  
  return (
  <Fragment>
    
    <div className="main">
        <div className="menu">
        <Menu/>
       </div>
       
       <div className="background">
         <div className="background2">
           <div className="mainHeader">
             <div>
                <input
                  placeholder="Search..."
                  onChange={handleOnChangeFilter}
                                                     
                />
                <img src={icoFilter} alt="ico"/>
              </div>
              <div>
                <input type="date" value={date} onChange={handleOnChange}/>  
              </div>              
           </div>
           <div className="nombreUsuario">
            <h1>Hola, Luis</h1>
           </div>
          <div className="box">
              <div className="containerEstadistica">
                <Estadisticas/>
              </div>

              <div className="containerMeta">
                <MetaGrupo/>
              </div> 
          </div>

          <div className="box">
              <div className="containerAgenda">
                <Agenda
                clientesLlamadas = {clientesLlamadas}
                clientesdb= {clientesdb}
                clientesFiltro = {clientesFiltro}
                cargando={cargando}
                />
              </div>
              <div className="containerPlan">
              <div className="headerPlan">
                <h3>Tu plan de hoy</h3>
                <a>Ir a la gestion de llamadas</a>  
              </div>
              
                <Plan/>
                
              </div>
          </div>
          </div>
        </div>
       

    <div className="nav">
      
       <nav className="nav-clientes">
        <NavClientes
        clientesdb = {clientesdb}
        cargando = {cargando}
        
        />
       </nav>
    </div>
   </div>   
   
   

  </Fragment>
  
  );
}

export default App;
