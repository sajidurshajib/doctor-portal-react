import classes from './Professional.module.css'

const Professional = () => {
    return (
        <div className={classes.Professional}>
            <h4>Change Password</h4>
            <form>
                <div className={classes.wrapInp}>
                    <div>
                        <input type="text" placeholder="Qualifications" />
                        <input type="number" placeholder="BMDC number" />
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Professional
