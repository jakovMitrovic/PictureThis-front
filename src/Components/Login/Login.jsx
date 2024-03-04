import React, { useContext, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import AnimatedPage from '../Animation/AnimatedPage'
const Login = () => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [registerUsername, setRegisterUsername] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const [user, setUser] = useContext(UserContext)

    const [refresh, setRefresh] = useState(false)

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const user = {
            username: loginUsername,
            password: loginPassword
        }

        try {
            await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            }).then((res) => res.json()).then((data) => {
                if (data.message === "ok") {
                    alert('Welcome!')

                    setUser({ token: data.token, _id: data.userId })

                    navigate('/')
                } else {
                    alert(data.message)
                }
            })
        } catch (error) {
            alert(error)
        }
    }


    const register = async (e) => {
        e.preventDefault()
        const user = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword
        }
        try {
            await fetch('http://localhost:4000/users/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            }).then((res) => res.json()).then((data) => {
                alert(data.message)
                navigate('/')
            })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <AnimatedPage>

            <div className='login_wrapper'>
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div class="login">
                        <form class="form" onSubmit={login}>
                            <label for="chk" aria-hidden="true">Log in</label>
                            <input class="input" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} type="text" name="text" placeholder="Username" required='true' />
                            <input class="input" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" name="pswd" placeholder="Password" required="true" />
                            <button className='cssbuttons-io'><span>Log in</span></button>
                        </form>
                    </div>

                    <div class="register">
                        <form class="form" onSubmit={register}>
                            <label for="chk" aria-hidden="true">Register</label>
                            <input class="input" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} type="text" name="txt" placeholder="Username" required="true" />
                            <input class="input" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} type="email" name="email" placeholder="Email" required="true" />
                            <input class="input" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} type="password" name="pswd" placeholder="Password" required="true" />
                            <button className='cssbuttons-io'><span>Register</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </AnimatedPage>

    )
}

export default Login
