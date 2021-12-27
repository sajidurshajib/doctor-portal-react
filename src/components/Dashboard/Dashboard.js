import Doctors from '../Doctors/Doctors'
import Forum from '../Forum/Forum'
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
        </div>
    )
}

export default Dashboard
