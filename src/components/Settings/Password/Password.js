import { useState, useContext, useEffect } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import config from '../../../config.json'
import classes from './Password.module.css'

const Password = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const [profile, setProfile] = useState('')

    useEffect(() => {
        if (stateAuth.auth) {
            setProfile(stateUser.info)
        }
    }, [setProfile, stateAuth, stateUser])

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

        let changeFetch = await fetch(`${config.api}/users/${profile.user.id}/password`, {
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
                            type="password"
                            placeholder="Current Password"
                        />
                        <input
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            type="password"
                            placeholder="New Password"
                        />
                        <input
                            value={cnfPass}
                            onChange={(e) => setCnfPass(e.target.value)}
                            type="password"
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
