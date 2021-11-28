import { useState } from 'react'
import classes from './SetSchedule.module.css'

const SetSchedule = () => {
    const [before, setBefore] = useState({ hour: 0, minute: 0, period: 'am' })
    const [after, setAfter] = useState({ hour: 0, minute: 0, period: 'am' })

    const [day, setDay] = useState({
        sat: false,
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
    })

    // const makeArray = () => {
    //     for (const [key, value] of Object.entries(day)) {
    //         if (value === true) {
    //         }
    //     }
    // }

    // const submit = (e) => {
    //     e.preventDefault()
    // }

    // for (const [key, value] of Object.entries(day)) {
    //     console.log(`${key}: ${value}`)
    // }

    return (
        <div className={classes.SetSchedule}>
            <h4>Set Telemedicine Schedule</h4>
            <div className={classes.checkGrid}>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, sat: true })} type="checkbox" id="sat" />
                    <label htmlFor="sat">Saturday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, sun: true })} type="checkbox" id="sun" />
                    <label htmlFor="sun">Sunday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, mon: true })} type="checkbox" id="mon" />
                    <label htmlFor="mon">Monday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, tue: true })} type="checkbox" id="tue" />
                    <label htmlFor="tue">Tuesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, wed: true })} type="checkbox" id="wed" />
                    <label htmlFor="wed">Wednesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, thu: true })} type="checkbox" id="thu" />
                    <label htmlFor="thu">Thursday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, fri: true })} type="checkbox" id="fri" />
                    <label htmlFor="fri">Friday</label>
                </div>
            </div>

            <h5>From</h5>
            <div className={classes.inp}>
                <input
                    value={before.hour}
                    onChange={(e) => setBefore({ ...before, hour: e.target.value })}
                    type="number"
                    placeholder="Hour"
                />
                <input
                    value={before.minute}
                    onChange={(e) => setBefore({ ...before, minute: e.target.value })}
                    type="number"
                    placeholder="Minute"
                />
                <select value={before.period} onChange={(e) => setBefore({ ...before, period: e.target.value })}>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>

            <h5>To</h5>
            <div className={classes.inp}>
                <input
                    value={after.hour}
                    onChange={(e) => setAfter({ ...after, hour: e.target.value })}
                    type="number"
                    placeholder="Hour"
                />
                <input
                    value={after.minute}
                    onChange={(e) => setAfter({ ...after, minute: e.target.value })}
                    type="number"
                    placeholder="Minute"
                />
                <select value={after.period} onChange={(e) => ({ ...after, period: e.target.value })}>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default SetSchedule
