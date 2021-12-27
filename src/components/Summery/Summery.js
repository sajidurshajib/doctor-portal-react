import { faHospitalUser, faUserMd, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Summery.module.css'

const Summery = () => {
    return (
        <div className={classes.Summery}>
            <div>
                <h3>50000</h3>
                <p>All Patients</p>
                <FontAwesomeIcon icon={faHospitalUser} />
            </div>
            <div>
                <h3>36</h3>
                <p>Available Doctors</p>
                <FontAwesomeIcon icon={faUserMd} />
            </div>
            <div>
                <h3>17</h3>
                <p>Appointed Patients</p>
                <FontAwesomeIcon icon={faUsers} />
            </div>
        </div>
    )
}

export default Summery
