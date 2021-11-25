import { faChartLine, faClock, faCog, faHome, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth } from '../../allContext'
import conf from '../../config.json'
import classes from './SideNav.module.css'

const SideNav = () => {
    const location = useLocation()

    const { stateAuth, dispatchAuth } = useContext(Auth)

    return (
        <div className={classes.SideNav}>
            <div className={classes.Wrapper}>
                <a href={`${conf['ep-local']}/auth/${stateAuth.token}`}>EP</a>
                <Link to="/" className={location.pathname === '/' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faUserMd} />
                </Link>
                <Link to="/schedule" className={location.pathname === '/schedule' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faClock} />
                </Link>
                <Link to="/analytics" className={location.pathname === '/analytics' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faChartLine} />
                </Link>
                <Link to="/settings" className={location.pathname === '/settings' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faCog} />
                </Link>

                <Link to="/login" onClick={() => dispatchAuth({ type: 'remove' })}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
            </div>
        </div>
    )
}

export default SideNav
