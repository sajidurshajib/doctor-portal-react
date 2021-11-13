import { Fragment, useState } from 'react'
import PieChart from '../Chart/PieChart/PieChart'
import classes from './PatientList.module.css'
import SinglePatient from './SinglePatient/SinglePatient'

const PatientList = () => {
    const [pie, setPie] = useState(false)

    return (
        <div className={classes.PatientList}>
            {/* <div className={classes.PatientSearch}>
                <input type="text" placeholder="Search patient" />
            </div> */}
            <h2 className={classes.heading}>Todays appointment (5)</h2>

            <div className={classes.AllPatient}>
                <SinglePatient data={{ name: 'Sajidur Rahman', sex: 'male', age: 27, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Arfuzamman Badhon', sex: 'male', age: 28, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Bipasha', sex: 'male', age: 26, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Eli Rahima', sex: 'male', age: 45, phone: '01580354972' }} />
                <SinglePatient data={{ name: 'Umar Faruk', sex: 'male', age: 35, phone: '01580354972' }} />
            </div>
            <div className={classes.PaientChart}>
                {pie ? (
                    <Fragment>
                        <PieChart />
                        <button onClick={() => setPie(false)}>Hide Patients data Pi Chart</button>
                    </Fragment>
                ) : (
                    <button onClick={() => setPie(true)}>Show Patients data Pi Chart</button>
                )}
            </div>
        </div>
    )
}

export default PatientList
