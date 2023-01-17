import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget'
import logo from '../../assets/logo.jpg'

const NavBar = () => {
  return (
    <header className='header'>
        <div className='inicio'>
            <img className='logo' src={logo} />            
            <NavLink className='titulo-logo' to='/'>ART</NavLink>
        </div>
        <nav className='nav'>             
            <ul>
                <li>
                    <NavLink className='a' to='/categoria/artefigurativo' >Arte figurativo</NavLink>
                </li>
                <li>
                    <NavLink className='a' to='/categoria/arteabstracto' >Arte abstracto</NavLink>
                </li>   
                <li>
                    <NavLink className='cart' to='/cart' ><CartWidget/></NavLink>
                </li>            
            </ul>            
        </nav>        
    </header>
  )
}

export default NavBar