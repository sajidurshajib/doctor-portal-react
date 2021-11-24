import classes from './PatientList.module.css'
import SinglePatient from './SinglePatient/SinglePatient'

const TodayList = () => {
    return (
        <div className={classes.PatientList} style={{ margin: '20px 20px 20px 0' }}>
            {/* <div className={classes.PatientSearch}>
                <input type="text" placeholder="Search patient" />
            </div> */}
            <h2 className={classes.heading}>Appointment (3)</h2>

            <div className={classes.AllPatient}>
                <SinglePatient data={{ name: 'Shajib Ahmed', sex: 'male', age: 27, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Badhon Islam', sex: 'female', age: 28, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Tanjil', sex: 'male', age: 26, phone: '01580354972' }} />
            </div>
        </div>
    )
}

export default TodayList
