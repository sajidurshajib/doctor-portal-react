import classes from './PatientList.module.css'

const PatientList = () => {
    return (
        <div className={classes.PatientList}>
            <div className={classes.PatientSearch}>
                <input type="text" placeholder="Search patient" />
            </div>
            <div className={classes.AllPatient}>
                <div className={classes.SinglePatient}>
                    <p>Patient Name</p>
                    <p>
                        <span>Sex: male</span>
                        <span>Age: 27</span>
                        <span>Phone: 01580354972</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PatientList
