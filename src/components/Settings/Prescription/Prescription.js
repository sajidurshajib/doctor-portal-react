import { useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import config from '../../../config.json'
import classes from './Prescription.module.css'

const Prescription = () => {
    const { stateAuth } = useContext(Auth)

    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

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

        let generalUpdate = await fetch(`${config.api}/doctors/${meLog.id}`, {
            headers: {
                // Accept: 'application/json',
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
            <h4>Change Password</h4>
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
