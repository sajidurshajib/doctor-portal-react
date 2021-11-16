import classes from './ViewSchedule.module.css'

const ViewSchedule = () => {
    return (
        <div className={classes.ViewSchedule}>
            <div className={classes.Wrapper}>
                <h4>Preview Schedule</h4>

                <div className={classes.calender}>
                    <div>
                        <p>Saturday</p>
                        <p className={classes.time}>
                            8.00 pm<span> to </span>11.00 pm
                        </p>
                        <p className={classes.time}>
                            12.00 am<span> to </span>1.00 am
                        </p>
                    </div>
                    <div>
                        <p>Sunday</p>
                        <p className={classes.time}>
                            8.00 am<span> to </span>10.00 am
                        </p>
                    </div>
                    <div>
                        <p>Monday</p>
                    </div>
                    <div>
                        <p>Tuesday</p>
                        <p className={classes.time}>
                            8.00 am<span> to </span>10.00 am
                        </p>
                    </div>
                    <div>
                        <p>Wednesday</p>
                    </div>
                    <div>
                        <p>Thursday</p>
                    </div>
                    <div>
                        <p>Friday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSchedule
