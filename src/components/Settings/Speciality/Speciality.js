import { useState } from 'react'
import classes from './Speciality.module.css'

const Speciality = () => {
    const [speciality, setSpeciality] = useState()

    let RegisteredSpeciality = ['Type A', 'Type B', 'Type C']

    return (
        <div className={classes.Speciality}>
            <h4>Speciality</h4>
            <form>
                <div className={classes.wrapInp}>
                    <input value={speciality} onChange={(e) => setSpeciality(e.target.value)} type="text" />
                    <button>Submit</button>
                </div>
            </form>

            <div className={classes.RegisteredSpeciality}>
                <h5>Registered Specialities</h5>
                {RegisteredSpeciality.map((v, i) => {
                    return (
                        <p key={i}>
                            {v} <span>X</span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default Speciality
