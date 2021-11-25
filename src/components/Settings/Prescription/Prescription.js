import { useState } from 'react'
import classes from './Prescription.module.css'

const Prescription = () => {
    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        let logFetch = await fetch('/login', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                left,
                right,
            }),
        })

        let log = await logFetch.json()

        // if (logFetch.ok) {
        //     dispatchAuth({ type: 'token', payload: log.access_token })
        // }
    }

    return (
        <div className={classes.Prescription}>
            <h4>Change Password</h4>
            <form>
                <div className={classes.wrapInp}>
                    <form onSubmit={submit}>
                        <label htmlFor="">Precription left header</label>
                        <textarea onChange={(e) => setLeft(e.target.value)} cols="20" rows="4" placeholder="">
                            {left}
                        </textarea>

                        <label htmlFor="">Prescription right header</label>
                        <textarea onChange={(e) => setRight(e.target.value)} cols="20" rows="4" placeholder="">
                            {right}
                        </textarea>
                        <button>Submit</button>
                    </form>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Prescription
