import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth } from './allContext'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import SchedulePage from './pages/SchedulePage'
import { authState, authReducer } from './reducer/authReducer'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)

    return (
        <div>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <Router>
                    <Switch>
                        <ProtectedRoute path="/" exact={true} component={Home} />
                        <ProtectedRoute path="/profile" component={ProfilePage} />
                        <ProtectedRoute path="/schedule" component={SchedulePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                    </Switch>
                </Router>
            </Auth.Provider>
        </div>
    )
}
export default App
