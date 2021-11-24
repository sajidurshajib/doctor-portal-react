import classes from './General.module.css'

const General = () => {
    return (
        <div className={classes.General}>
            <h4>General Information</h4>
            <form>
                <div className={classes.wrapInp}>
                    <div>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="phone" />
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default General
