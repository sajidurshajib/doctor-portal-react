import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth, UserInfo } from '../../../allContext'
import classes from './SetSchedule.module.css'

const SetSchedule = ({ change, setChange }) => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const [profile, setProfile] = useState('')

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    useEffect(() => {
        if (stateAuth.auth) {
            setProfile(stateUser.info)
        }
    }, [setProfile, stateAuth, stateUser])

    const [start, setStart] = useState({ hour: 0, minute: 0, period: 'am' })
    const [end, setEnd] = useState({ hour: 0, minute: 0, period: 'am' })

    //Should be refactor
    const [day, setDay] = useState({
        saturday: false,
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
    })

    let selectedDay = []
    const trueDay = () => {
        for (const [key, value] of Object.entries(day)) {
            if (value === true) {
                selectedDay.push(key)
            }
        }
    }

    const submit = async (e) => {
        e.preventDefault()

        trueDay()

        selectedDay.forEach(async (item, i) => {
            let submitSchedule = await fetch(`${api}/doctors/${profile.id}/schedules`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
                method: 'POST',
                body: JSON.stringify({
                    doctor_id: profile.id,
                    schedules: {
                        day: item,
                        start_time: `${start.hour}:${start.minute} ${start.period.toUpperCase()}`,
                        end_time: `${end.hour}:${end.minute} ${end.period.toUpperCase()}`,
                    },
                }),
            })

            if (!submitSchedule.ok) {
            } else {
                let a = change + 1
                setChange(a)
                setStart({ hour: 0, minute: 0, period: 'am' })
                setEnd({ hour: 0, minute: 0, period: 'am' })
                setDay({
                    saturday: false,
                    sunday: false,
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                })
            }
        })
    }

    return (
        <div className={classes.SetSchedule}>
            <h4>Set Your Telemedicine Schedule</h4>
            <div className={classes.checkGrid}>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, saturday: true })} type="checkbox" id="sat" />
                    <label htmlFor="sat">Saturday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, sunday: true })} type="checkbox" id="sun" />
                    <label htmlFor="sun">Sunday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, monday: true })} type="checkbox" id="mon" />
                    <label htmlFor="mon">Monday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, tuesday: true })} type="checkbox" id="tue" />
                    <label htmlFor="tue">Tuesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, wednesday: true })} type="checkbox" id="wed" />
                    <label htmlFor="wed">Wednesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, thursday: true })} type="checkbox" id="thu" />
                    <label htmlFor="thu">Thursday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input onChange={(e) => setDay({ ...day, friday: true })} type="checkbox" id="fri" />
                    <label htmlFor="fri">Friday</label>
                </div>
            </div>

            <h5>From</h5>
            <div className={classes.inp}>
                <input
                    // value={start.hour}
                    onChange={(e) => setStart({ ...start, hour: e.target.value })}
                    type="number"
                    placeholder="Hour"
                />
                <input
                    // value={start.minute}
                    onChange={(e) => setStart({ ...start, minute: e.target.value })}
                    type="number"
                    placeholder="Minute"
                />
                <select value={start.period} onChange={(e) => setStart({ ...start, period: e.target.value })}>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>

            <h5>To</h5>
            <div className={classes.inp}>
                <input
                    // value={end.hour}
                    onChange={(e) => setEnd({ ...end, hour: e.target.value })}
                    type="number"
                    placeholder="Hour"
                />
                <input
                    // value={end.minute}
                    onChange={(e) => setEnd({ ...end, minute: e.target.value })}
                    type="number"
                    placeholder="Minute"
                />
                <select value={end.period} onChange={(e) => ({ ...end, period: e.target.value })}>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default SetSchedule
