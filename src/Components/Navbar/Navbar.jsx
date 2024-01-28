import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav__container'>

        <div className='navbar'>
            <div className='nav__logo'>
                <img src={logo} alt='logo' />
                <p>Picture This</p>
            </div>
            <ul className='nav__menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cameras'>Cameras</Link></li>
                <li><Link to='/lenses'>Lenses</Link></li>
                <li>Lighting</li>
            </ul>
            <div className='login__cart'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shopping__cart">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className='cart__counter'>0</div>

                <button class="cssbuttons-io">
                    <span>
                        Sign Up
                    </span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Navbar
