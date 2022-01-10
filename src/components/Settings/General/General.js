import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth, UserInfo } from '../../../allContext'
import classes from './General.module.css'

const General = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const [profile, setProfile] = useState('')

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    useEffect(() => {
        if (stateAuth.auth) {
            setProfile(stateUser.info)
        }
    }, [setProfile, stateAuth, stateUser])

    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const [general, setGeneral] = useState({ name: '', email: '', phone: '', sex: '' })

    const submit = async (e) => {
        e.preventDefault()

        let genObj = {}
        for (let key in general) {
            if (general[key]) genObj[key] = general[key]
        }

        let generalUpdate = await fetch(`${api}/users/${profile.user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify(genObj),
        })

        if (!generalUpdate.ok) {
            setWarning('Something went wrong!')
        } else {
            setSuccess('Successfully updated.')
            setGeneral({ name: '', email: '', phone: '', sex: '' })
        }
    }

    return (
        <div className={classes.General}>
            <h4>General Information</h4>

            <form onSubmit={submit}>
                <div className={classes.wrapInp}>
                    <div>
                        {success.length !== 0 ? <p className={classes.successFlash}>{success}</p> : null}
                        {warning.length !== 0 ? <p className={classes.warningFlash}>{warning}</p> : null}

                        <input
                            value={general.name}
                            onChange={(e) => setGeneral({ ...general, name: e.target.value })}
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            value={general.email}
                            onChange={(e) => setGeneral({ ...general, email: e.target.value })}
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            value={general.phone}
                            onChange={(e) => setGeneral({ ...general, phone: e.target.phone })}
                            type="text"
                            placeholder="phone"
                            pattern="[0-9]{11}"
                        />
                        <select value={general.sex} onChange={(e) => setGeneral({ ...general, sex: e.target.sex })}>
                            <option value="" disabled>
                                Sex
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default General
