import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth } = useContext(Auth)

    return (
        <Route
            {...rest}
            render={(props) => (stateAuth.auth ? <Component {...rest} {...props} /> : <Redirect to="/login" />)}
        />
    )
}
export default ProtectedRoute