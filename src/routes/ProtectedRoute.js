import { useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Route, Redirect } from 'react-router-dom'
import { Auth, UserInfo } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    useEffect(() => {
        let funFetch = async () => {
            let logFetch = await fetch(`${api}/me`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                dataType: 'json',
                method: 'GET',
            })

            let log = await logFetch.json()
            dispatchUser({ type: 'set', payload: log })
        }
        if (stateAuth.auth === true) {
            funFetch()
        }
    }, [stateAuth, dispatchUser])

    return (
        <Route
            {...rest}
            render={(props) =>
                stateAuth.auth === true ? <Component {...rest} {...props} /> : <Redirect to="/login" />
            }
        />
    )
}
export default ProtectedRoute
