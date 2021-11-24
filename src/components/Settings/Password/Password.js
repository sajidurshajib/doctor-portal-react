import { useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import classes from './Password.module.css'

const Password = () => {
    const { stateAuth } = useContext(Auth)

    const [password, setPassword] = useState('')
    const [newPass, setNewPass] = useState('')
    const [cnfPass, setCnfPass] = useState('')
    const [cng, setCng] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        if (newPass !== cnfPass) {
            setCng('Please confirm password...')
            return
        }

        let meFetch = await fetch('https://epapidev.healthx.com.bd/me/', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'GET',
        })

        let meLog = await meFetch.json()

        console.log(meLog)

        let changeFetch = await fetch(`https://epapidev.healthx.com.bd/users/${meLog.user.id}/password`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'PATCH',
            body: JSON.stringify({
                current_password: password,
                new_password: newPass,
            }),
        })

        if (!changeFetch.ok) {
            setCng('Something went wrong!')
        }
    }

    console.log(cng)

    return (
        <div className={classes.Password}>
            <h4>Change Password</h4>
            <form onSubmit={submit}>
                <div className={classes.wrapInp}>
                    <div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            placeholder="Current Password"
                        />
                        <input
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            type="text"
                            placeholder="New Password"
                        />
                        <input
                            value={cnfPass}
                            onChange={(e) => setCnfPass(e.target.value)}
                            type="text"
                            placeholder="Confirm New Password"
                        />
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Password
