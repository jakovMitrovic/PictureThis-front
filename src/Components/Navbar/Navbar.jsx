import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/picturethislogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { UserContext } from '../../Context/UserContext'
import Search from '../SearchBar/SearchBar'
import SearchBar from '../SearchBar/SearchBar'


const Navbar = () => {


    const [cart, setCart] = useContext(CartContext)
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    // const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("cart_counter").classList.remove('counter_change');
        }, 200)
        document.getElementById("cart_counter").classList.add('counter_change')
    }, [cart])

    return (
        <div className='navbar__container'>

            <div className='navbar'>

                <Link to={'/'} className='nav__logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <ul className='nav__menu'>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/cameras'>Cameras</Link></li>
                    <li><Link className='link' to='/lenses'>Lenses</Link></li>
                    <li><Link className='link' to='/other'>Other</Link></li>
                    <SearchBar/>
                </ul>

                <div className='login__cart'>


                    <Link className='cart_link' to={user.token ? '/cart' : '/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shopping__cart">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </Link>
                    <div className='cart__counter' id='cart_counter'>{user.token ? cart?.length : 0}</div>
                    {user.token ? (
                        <button onClick={()=>{setUser({token:''}); navigate('/')}} class="cssbuttons-io nav_login">
                            <span>
                                Log Out
                            </span>
                        </button>
                    ):
                    (
                    <Link to='/login'>
                        <button class="cssbuttons-io nav_login">
                            <span>
                                Sign Up
                            </span>
                        </button>
                    </Link>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
