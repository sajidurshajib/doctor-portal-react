import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Register.module.css'

const Register = () => {
    return (
        <div className={classes.Register}>
            <div className={classes.wrapper}>
                <div className={classes.card}>
                    <FontAwesomeIcon icon={faUserMd} />
                    <h2>Register</h2>
                    <form>
                        <div className={classes.grid}>
                            <div className={classes.gridItem}>
                                <input type="text" placeholder="Type your Name" />
                                <select name="" id="">
                                    <option value="" disabled>
                                        Sex
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                                <input type="text" placeholder="Type your Email" />
                                <input type="password" placeholder="Type your Password" />
                            </div>
                            <div className={classes.gridItem}>
                                <input type="text" placeholder="Type your Phone" />
                                <input type="text" placeholder="Type your Speciality" />
                                <input type="text" placeholder="Type your Qualification" />
                                <input type="number" placeholder="BMDC number" />
                            </div>
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
