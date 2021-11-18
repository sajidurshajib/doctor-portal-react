import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.Login}>
            <div className={classes.wrapper}>
                <div className={classes.card}>
                    <FontAwesomeIcon icon={faUserMd} />
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Email or Phone" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                    <p>
                        Not a memeber? <Link to="/register">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
