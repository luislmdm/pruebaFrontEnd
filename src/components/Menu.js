import React, { Fragment } from 'react';
import icoHome from "./../img/icoHome.svg"
import icoTask from "./../img/icoTask.svg"
import icoMenu from "./../img/icoMenu.svg"

const Menu = () => {
  return (
    <Fragment>
      
      <div>
      <img className="logo" src='https://www.kuepa.com/Logo-Kuepa-01-9c3697785e53e9ee964d96fe0c59b8b8.png' className='logo'></img>

        <div>
          <img src={icoHome}></img>
        </div>

        <div>
          <img src={icoTask}></img>
        </div>

        <div>
          <img src={icoMenu}></img>
        </div>
      </div>

      <div>
        
          <img src={icoTask}></img>
       

       
          <img src={icoHome} className="img1"></img>
        
      </div>

    </Fragment>
  )};

export default Menu;
