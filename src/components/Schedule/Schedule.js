import { useState } from 'react'
import SideNav from '../SideNav/SideNav'
import classes from './Schedule.module.css'
import SetSchedule from './SetSchedule/SetSchedule'
import ViewSchedule from './ViewSchedule/ViewSchedule'

const Schedule = () => {
    const [cng, setCng] = useState(0)

    return (
        <div className={classes.Schedule}>
            <SideNav />
            <div className={classes.Wrapper}>
                <SetSchedule change={cng} setChange={setCng} />
                <ViewSchedule change={cng} />
            </div>
        </div>
    )
}

export default Schedule
