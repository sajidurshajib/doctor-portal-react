import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth, UserInfo } from '../../../allContext'
import classes from './Prescription.module.css'

const Prescription = () => {
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

    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        let generalUpdate = await fetch(`${api}/doctors/${profile.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                prescription_header_right: right,
                prescription_header_left: left,
            }),
        })

        if (!generalUpdate.ok) {
            setWarning('Something went wrong!')
        } else {
            setSuccess('Successfully updated...!')
            setRight('')
            setLeft('')
        }
    }

    return (
        <div className={classes.Prescription}>
            <h4>Prescription Header</h4>
            <form onSubmit={submit}>
                <div className={classes.wrapInp}>
                    {success.length !== 0 ? <p className={classes.successFlash}>{success}</p> : null}
                    {warning.length !== 0 ? <p className={classes.warningFlash}>{warning}</p> : null}

                    <label htmlFor="">Precription left header</label>
                    <textarea
                        onChange={(e) => setLeft(e.target.value)}
                        value={left}
                        cols="20"
                        rows="4"
                        placeholder=""></textarea>

                    <label htmlFor="">Prescription right header</label>
                    <textarea
                        onChange={(e) => setRight(e.target.value)}
                        value={right}
                        cols="20"
                        rows="4"
                        placeholder=""></textarea>
                    <button>Submit</button>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Prescription
