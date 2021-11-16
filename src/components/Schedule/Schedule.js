import SideNav from '../SideNav/SideNav'
import classes from './Schedule.module.css'
import SetSchedule from './SetSchedule/SetSchedule'
import ViewSchedule from './ViewSchedule/ViewSchedule'

const Schedule = () => {
    return (
        <div className={classes.Schedule}>
            <SideNav />
            <div className={classes.Wrapper}>
                <SetSchedule />
                <ViewSchedule />
            </div>
        </div>
    )
}

export default Schedule
