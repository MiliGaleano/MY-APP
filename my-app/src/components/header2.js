import React from 'react';
import MYtineraryLogo from './img/MYtineraryLogo.png';
import UsuarioLogo from './img/usuario.png';
import './style.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Header2() {
    return (

<header className="App-header">

<div className="Barra-menus" class="d-flex align-items-center justify-content-between">
  <div className="MenuUsuario">
          
  <DropdownButton id="dropdown-basic-button" title="Usuario">
      <a href="#" id="imageDropdown" data-toggle="dropdown">
      <img id="dropdown-basic-button"
      className="usuario-Logo"
      src={UsuarioLogo}
      alt={''}
      /></a>
    <Dropdown.Item href="/LogIn">Log in</Dropdown.Item>
    <Dropdown.Item href="#">Create Account</Dropdown.Item>
  </DropdownButton>
  </div>
  
  <div className="MenuHamb">
  <DropdownButton id="dropdown-basic-button" title="Menu">
    <Dropdown.Item href="#">1</Dropdown.Item>
    <Dropdown.Item href="#">2</Dropdown.Item>
  </DropdownButton>
  </div>
</div>

          <div className="Imagen-logo">
            <img
            className="app-Logo"
            src={MYtineraryLogo}
            alt={''}
            /> 
          </div>
        </header>
        
    );
  }

  export default Header2;