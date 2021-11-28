import { useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import config from '../../../config.json'
import classes from './Professional.module.css'

const Professional = () => {
    const { stateAuth } = useContext(Auth)

    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const [qualifications, setQualifications] = useState('')
    const [bmdc, setBmdc] = useState('')

    const submit = async (e) => {
        e.preventDefault()

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

        let updateFetch = await fetch(`${config.api}/doctors/${meLog.id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                qualification: qualifications,
                bmdc_number: bmdc,
            }),
        })

        if (!updateFetch.ok) {
            setWarning('Something went wrong!')
        } else {
            setSuccess('Successfully updated.')
            setQualifications('')
            setBmdc('')
        }
    }

    return (
        <div className={classes.Professional}>
            <h4>Change Password</h4>
            <form onSubmit={submit}>
                <div className={classes.wrapInp}>
                    <div>
                        {success.length !== 0 ? <p className={classes.successFlash}>{success}</p> : null}
                        {warning.length !== 0 ? <p className={classes.warningFlash}>{warning}</p> : null}

                        <input
                            value={qualifications}
                            onChange={(e) => setQualifications(e.target.value)}
                            type="text"
                            placeholder="Qualifications"
                        />
                        <input
                            value={bmdc}
                            onChange={(e) => setBmdc(e.target.value)}
                            type="number"
                            placeholder="BMDC number"
                        />
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Professional
