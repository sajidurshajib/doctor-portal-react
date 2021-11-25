import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth } = useContext(Auth)

    return (
        <Route
            {...rest}
            render={(props) =>
                stateAuth.token.length !== 0 ? <Component {...rest} {...props} /> : <Redirect to="/login" />
            }
        />
    )
}
export default ProtectedRoute
