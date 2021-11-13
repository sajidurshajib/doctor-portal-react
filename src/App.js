import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import SchedulePage from './pages/SchedulePage'

const App = () => {
    return (
        <div>
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
        </div>
    )
}
export default App
