import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth, UserInfo } from '../../../allContext'
import classes from './Professional.module.css'

const Professional = () => {
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

    const [qualifications, setQualifications] = useState('')
    const [bmdc, setBmdc] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        let updateFetch = await fetch(`${api}/doctors/${profile.id}`, {
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
            <h4>Professional information</h4>
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
