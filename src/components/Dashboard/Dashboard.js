import SubProfile from '../DocProfile/SubProfile/SubProfile'
import PatientList from '../PatientList/PatientList'
import SideNav from '../SideNav/SideNav'
import classes from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <SideNav />
            <div className={classes.Wrapper}>
                <div className={classes.PatientSide}>
                    <PatientList />
                </div>
                <div className={classes.DoctorSide}>
                    <SubProfile />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
