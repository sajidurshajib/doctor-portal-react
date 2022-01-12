import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import env from 'react-dotenv'
import { useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import classes from './Register.module.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [sex, setSex] = useState('male')
    const [speciality, setSpeciality] = useState('')
    const [qualification, setQualification] = useState('')
    const [bmdc, setBmdc] = useState('')
    const [alert, setAlert] = useState([])

    const { stateAuth } = useContext(Auth)
    const history = useHistory()

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    const submit = async (e) => {
        e.preventDefault()

        if (password !== cnfPassword) {
            setAlert([...alert, 'Password not confirmed'])
            return
        }

        let regId = await fetch(`${api}/doctors`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email,
                    phone,
                    is_active: true,
                    name,
                    password,
                    sex,
                    role: 'doctor',
                },
                qualification,
                bmdc_number: bmdc,
                speciality,
            }),
        })

        let reg = await regId.json()
        // console.log(reg)

        if (!regId.ok) {
            let newMessage = reg.context.message
            setAlert([...alert, newMessage])
        }

        if (!regId.ok) {
            history.push('login/')
        }


    // Redirect if login
    if (stateAuth.auth) {
        history.push('/')
    }
    return (
        <div className={classes.Register}>
            <div className={classes.wrapper}>
                <div className={classes.card}>
                    <FontAwesomeIcon icon={faUserMd} />
                    <h2>Register</h2>
                    <div className={classes.warning}>
                        {alert.map((v, i) => {
                            return <p key={i}>{v}</p>
                        })}
                    </div>
                    <form onSubmit={(e) => submit(e)}>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" required />
                        <div className={classes.grid}>
                            <div className={classes.gridItem}>
                                <select onChange={(e) => setSex(e.target.value)} value={sex} required>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                                <input
                                    onChange={(e) => setCnfPassword(e.target.value)}
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            <div className={classes.gridItem}>
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="Phone"
                                    pattern="[0-9]{11}"
                                    title="Enter 11 digit phone number"
                                    required
                                />
                                <input
                                    onChange={(e) => setSpeciality(e.target.value)}
                                    type="text"
                                    placeholder="Type your Speciality"
                                    required
                                />
                                <input
                                    onChange={(e) => setQualification(e.target.value)}
                                    type="text"
                                    placeholder="Type your Qualification"
                                    required
                                />
                                <input
                                    onChange={(e) => setBmdc(e.target.value)}
                                    type="number"
                                    placeholder="BMDC number"
                                    required
                                />
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
