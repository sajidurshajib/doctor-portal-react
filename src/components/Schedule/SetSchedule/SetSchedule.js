import classes from './SetSchedule.module.css'

const SetSchedule = () => {
    return (
        <div className={classes.SetSchedule}>
            <h4>Set Telemedicine Schedule</h4>
            <div className={classes.checkGrid}>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="sat" value="sat" />
                    <label htmlFor="sat">Saturday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="sun" value="sun" />
                    <label htmlFor="sun">Sunday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="mon" value="mon" />
                    <label htmlFor="mon">Monday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="tue" value="tue" />
                    <label htmlFor="tue">Tuesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="wed" value="wed" />
                    <label htmlFor="wed">Wednesday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="thu" value="thu" />
                    <label htmlFor="thu">Thursday</label>
                </div>
                <div className={classes.singleCheck}>
                    <input type="checkbox" id="fri" value="fri" />
                    <label htmlFor="fri">Friday</label>
                </div>
            </div>

            {/* <div className={classes.selectWrap}>
                <select>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                </select>
                <span></span>
            </div> */}
            <h5>From</h5>
            <div className={classes.inp}>
                <input type="number" placeholder="Hour" />
                <input type="number" placeholder="Minute" />
                <select>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>

            <h5>To</h5>
            <div className={classes.inp}>
                <input type="number" placeholder="Hour" />
                <input type="number" placeholder="Minute" />
                <select>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default SetSchedule
