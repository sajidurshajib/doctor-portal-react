import { faChartLine, faClock, faCog, faHome, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import env from 'react-dotenv'
import { Link, useLocation } from 'react-router-dom'
import { Auth } from '../../allContext'
import classes from './SideNav.module.css'

const SideNav = () => {
    const location = useLocation()

    const { stateAuth, dispatchAuth } = useContext(Auth)
    const [windowHref, setWindowHref] = useState(false)

    if (windowHref) {
        window.location = `${process.env.REACT_APP_EP_SITE}/auth/${stateAuth.token}`
    }

    console.log(env.REACT_APP_EP_SITE)
    console.log(process.env.REACT_APP_EP_SITE)

    return (
        <div className={classes.SideNav}>
            <div className={classes.Wrapper}>
                {/* <a href={`${env.EP_SITE}/auth/${stateAuth.token}`}>EP</a> */}
                <p onClick={() => setWindowHref(!windowHref)}>EP</p>

                <Link to="/" className={location.pathname === '/' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faUserMd} /> <span>Profile</span>
                </Link>
                <Link to="/schedule" className={location.pathname === '/schedule' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faClock} /> <span>Schedule</span>
                </Link>
                <Link to="/analytics" className={location.pathname === '/analytics' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faChartLine} /> <span>Analytics</span>
                </Link>
                <Link to="/settings" className={location.pathname === '/settings' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                </Link>

                <Link to="/login" onClick={() => dispatchAuth({ type: 'remove' })}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default SideNav
