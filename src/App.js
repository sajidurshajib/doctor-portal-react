import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth } from './allContext'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import SchedulePage from './pages/SchedulePage'
import { authState, authReducer } from './reducer/authReducer'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)

    return (
        <div>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <Router>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/schedule">
                            <SchedulePage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/register">
                            <RegisterPage />
                        </Route>
                    </Switch>
                </Router>
            </Auth.Provider>
        </div>
    )
}
export default App
