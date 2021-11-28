import { useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import config from '../../../config.json'
import classes from './General.module.css'

const General = () => {
    const { stateAuth } = useContext(Auth)

    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const [general, setGeneral] = useState({ name: '', email: '', phone: '', sex: '' })

    const submit = async (e) => {
        e.preventDefault()

        let genObj = {}
        for (let key in general) {
            if (general[key]) genObj[key] = general[key]
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

        let generalUpdate = await fetch(`${config.api}/users/${meLog.user.id}`, {
            headers: {
                // Accept: 'application/json',
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
