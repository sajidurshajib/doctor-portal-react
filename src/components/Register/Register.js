import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Register.module.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [sex, setSex] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [qualification, setQualification] = useState('')
    const [bmdc, setBmdc] = useState('')

    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()

        let regId = await fetch('signup/', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                email,
                phone,
                is_active: true,
                name,
                password,
                sex,
                role: 'doctor',
            }),
        })

        let reg = await regId.json()
        console.log(reg)

        let doctorId = await fetch('doctors/', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                user_id: reg.id,
                qualification,
                bmdc_number: bmdc,
            }),
        })

        let doctor = await doctorId.json()
        console.log(doctor)

        let specialId = await fetch(`doctors/${doctor.id}/specialities/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                speciality,
            }),
        })

        let special = await specialId.json()
        console.log(special)

        history.push('/login')
    }

    return (
        <div className={classes.Register}>
            <div className={classes.wrapper}>
                <div className={classes.card}>
                    <FontAwesomeIcon icon={faUserMd} />
                    <h2>Register</h2>
                    <form>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" />
                        <div className={classes.grid}>
                            <div className={classes.gridItem}>
                                <select onChange={(e) => setSex(e.target.value)} value={sex}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                                <input
                                    onChange={(e) => setCnfPassword(e.target.value)}
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className={classes.gridItem}>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
                                <input
                                    onChange={(e) => setSpeciality(e.target.value)}
                                    type="text"
                                    placeholder="Type your Speciality"
                                />
                                <input
                                    onChange={(e) => setQualification(e.target.value)}
                                    type="text"
                                    placeholder="Type your Qualification"
                                />
                                <input
                                    onChange={(e) => setBmdc(e.target.value)}
                                    type="number"
                                    placeholder="BMDC number"
                                />
                            </div>
                        </div>
                        <button onClick={(e) => submit(e)}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
