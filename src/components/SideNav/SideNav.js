import { faAddressBook, faHome, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './SideNav.module.css'

const SideNav = () => {
    return (
        <div className={classes.SideNav}>
            <div className={classes.Wrapper}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/">
                    <FontAwesomeIcon icon={faUserMd} />
                </Link>
                <Link to="/">
                    <FontAwesomeIcon icon={faAddressBook} />
                </Link>
                <Link to="/">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
            </div>
        </div>
    )
}

export default SideNav
