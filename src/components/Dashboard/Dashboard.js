import MultiLine from '../Chart/MultiLine/MultiLine'
import SubProfile from '../DocProfile/SubProfile/SubProfile'
import Doctors from '../Doctors/Doctors'
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
                    <Doctors />
                </div>
                <div className={classes.DoctorSide}>
                    <SubProfile />
                    <MultiLine />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
