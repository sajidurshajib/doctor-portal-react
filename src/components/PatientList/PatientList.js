import classes from './PatientList.module.css'
import SinglePatient from './SinglePatient/SinglePatient'

const PatientList = () => {
    return (
        <div className={classes.PatientList}>
            {/* <div className={classes.PatientSearch}>
                <input type="text" placeholder="Search patient" />
            </div> */}
            <h2 className={classes.heading}>Appointment request (5)</h2>

            <div className={classes.AllPatient}>
                <SinglePatient data={{ name: 'Sajidur Rahman', sex: 'male', age: 27, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Arfuzamman Badhon', sex: 'male', age: 28, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Bipasha', sex: 'male', age: 26, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Eli Rahima', sex: 'male', age: 45, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Umar Faruk', sex: 'male', age: 35, phone: '01580354972' }} />
            </div>
        </div>
    )
}

export default PatientList
