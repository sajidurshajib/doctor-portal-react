import { faAddressBook, faClock, faHome, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth } from '../../allContext'
import classes from './SideNav.module.css'

const SideNav = () => {
    const location = useLocation()

    const { dispatchAuth } = useContext(Auth)

    return (
        <div className={classes.SideNav}>
            <div className={classes.Wrapper}>
                <Link to="/" className={location.pathname === '/' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faUserMd} />
                </Link>
                <Link to="/schedule" className={location.pathname === '/schedule' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faClock} />
                </Link>
                <Link to="/login">
                    <FontAwesomeIcon icon={faAddressBook} />
                </Link>
                <Link to="/register">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
                <Link to="/login" onClick={() => dispatchAuth({ type: 'remove' })}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
            </div>
        </div>
    )
}

export default SideNav
