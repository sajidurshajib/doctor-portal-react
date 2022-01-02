import Doctors from '../Doctors/Doctors'
import Events from '../Events/Events'
import Forum from '../Forum/Forum'
import Notice from '../Notice/Notice'
import PatientList from '../PatientList/PatientList'
import TodayList from '../PatientList/TodayList'
import SideNav from '../SideNav/SideNav'
import classes from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <SideNav />
            <div className={classes.Wrapper}>
                <div className={classes.PatientSide}>
                    <PatientList />
                    <Doctors />
                </div>
                <div className={classes.DoctorSide}>
                    <TodayList />
                    <Forum />
                </div>
            </div>
            <Notice />
            <Events />
        </div>
    )
}

export default Dashboard
