import classes from './Schedule.module.css'

const Schedule = () => {
    return (
        <div className={classes.Schedule}>
            <h4>Availables Hours</h4>
            <ul>
                <li>
                    Day <span>Period</span>
                </li>
                <li>
                    Monday <span>11.00am - 3.00pm</span>
                </li>
                <li>
                    Saturday <span>8.00am - 1.00pm</span>
                </li>
                <li>
                    Sunday <span>11.00am - 3.00pm</span>
                </li>
                <li>
                    Friday <span>11.00am - 3.00pm</span>
                </li>
            </ul>
        </div>
    )
}

export default Schedule
