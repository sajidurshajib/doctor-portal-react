import { useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import config from '../../../config.json'
import classes from './Password.module.css'

const Password = () => {
    const { stateAuth } = useContext(Auth)

    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const [password, setPassword] = useState('')
    const [newPass, setNewPass] = useState('')
    const [cnfPass, setCnfPass] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        if (newPass !== cnfPass) {
            setWarning('Please confirm password...')
            return
        }

        let meFetch = await fetch(`${config.api}/me`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'GET',
        })

        let meLog = await meFetch.json()

        let changeFetch = await fetch(`${config.api}/users/${meLog.user.id}/password`, {
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
            setWarning('Something went wrong!')
        } else {
            setSuccess('Password changed successfully...!')
            setPassword('')
            setNewPass('')
            setCnfPass('')
        }
    }

    return (
        <div className={classes.Password}>
            <h4>Change Password</h4>
            <form onSubmit={submit}>
                <div className={classes.wrapInp}>
                    <div>
                        {success.length !== 0 ? <p className={classes.successFlash}>{success}</p> : null}
                        {warning.length !== 0 ? <p className={classes.warningFlash}>{warning}</p> : null}
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
