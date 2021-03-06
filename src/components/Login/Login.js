import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import env from 'react-dotenv'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import classes from './Login.module.css'

const Login = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)

    const history = useHistory()

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    const submit = async (e) => {
        e.preventDefault()

        let logFetch = await fetch(`${api}/login`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        let log = await logFetch.json()

        if (logFetch.ok) {
            dispatchAuth({ type: 'token', payload: log.access_token })
        }
    }

    // Redirect if login

    return (
        <div className={classes.Login}>
            {stateAuth.auth ? history.push('/') : null}

            <div className={classes.wrapper}>
                <div className={classes.card}>
                    <FontAwesomeIcon icon={faUserMd} />
                    <h2>Login</h2>
                    <form onSubmit={(e) => submit(e)}>
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            placeholder="Email or Phone"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
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
