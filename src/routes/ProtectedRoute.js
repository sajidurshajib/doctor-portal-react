import { useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Route, useHistory } from 'react-router-dom'
import { Auth, UserInfo } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const history = useHistory()

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

            if (logFetch.ok) {
                dispatchUser({ type: 'set', payload: log })
            } else {
                dispatchAuth({ type: 'remove' })
            }
        }

        if (stateAuth.auth === true && stateAuth.token.length !== 0) {
            funFetch()
        }
    }, [stateAuth, dispatchUser, api, dispatchAuth])

    if (stateAuth.auth === true) {
        return <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    } else {
        return history.push('/login')
    }
}
export default ProtectedRoute
