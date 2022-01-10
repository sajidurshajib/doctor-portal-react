import { useEffect, useContext, useState } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../../allContext'
import classes from './ViewSchedule.module.css'

const ViewSchedule = ({ change }) => {
    const { stateAuth } = useContext(Auth)

    const [schedule, setSchedule] = useState('')

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    useEffect(() => {
        const funFetch = async () => {
            let meFetch = await fetch(`${api}/me`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                dataType: 'json',
                method: 'GET',
            })

            let meLog = await meFetch.json()

            let scheduleFetch = await fetch(`${api}/doctors/${meLog.id}/schedules`)
            let allSchedule = await scheduleFetch.json()

            allSchedule.schedules.sort((a, b) => (a.start_time > b.start_time ? 1 : -1))

            setSchedule(allSchedule.schedules)
        }

        funFetch()
    }, [change, stateAuth, schedule, api])

    const deleteSchedule = async (id) => {
        let meFetch = await fetch(`${api}/me`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stateAuth.token}`,
            },
            dataType: 'json',
            method: 'GET',
        })

        let meLog = await meFetch.json()

        let delSchedule = await fetch(`${api}/doctors/${meLog.id}/schedules/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'DELETE',
        })

        if (!delSchedule.ok) {
        } else {
        }
    }

    return (
        <div className={classes.ViewSchedule}>
            <div className={classes.Wrapper}>
                <h4>Schedule Preview</h4>

                <div className={classes.calender}>
                    <div>
                        <p>Saturday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'saturday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Sunday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'sunday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Monday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'monday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Tuesday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'tuesday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Wednesday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'wednesday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Thursday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'thursday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                    <div>
                        <p>Friday</p>
                        {schedule.length !== 0
                            ? schedule.map((v, i) => {
                                  return (
                                      <div key={i}>
                                          {v.day === 'friday' ? (
                                              <p className={classes.time}>
                                                  {v.start_time}
                                                  <span> to </span>
                                                  {v.end_time}
                                                  <span onClick={() => deleteSchedule(v.id)}>x</span>
                                              </p>
                                          ) : null}
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSchedule
