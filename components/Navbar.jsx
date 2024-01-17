import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import img10 from '../img/meramlogo.jpg'

function Navbar() {
    const mystyle = {
         marginLeft: "700px",

        
    }
  return (
    <>
    <div className='sticky'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'  >
  <div className="container" id='navcont' >
    <a className="navbar-brand" href="/"  ><img src={img10} alt="" style={{width:'30px',height:'30px'}} /> Meram Belediyesi  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink className="nav-link" to="/" style={mystyle}  >Başkan</NavLink>
        <NavLink className="nav-link" to="/about">Meram <div></div> </NavLink>
        <NavLink className="nav-link" to="/sitekonutları">Site Konutları</NavLink>
        <NavLink className="nav-link" to="/faaliyet">Haberler</NavLink>
        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
        


      </ul>
    </div>
  </div>
</nav>
    </div>
    
    </>
  )
}

export default Navbar