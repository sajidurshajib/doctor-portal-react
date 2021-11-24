import classes from './Prescription.module.css'

const Prescription = () => {
    return (
        <div className={classes.Prescription}>
            <h4>Change Password</h4>
            <form>
                <div className={classes.wrapInp}>
                    <div>
                        <label htmlFor="">Precription left header</label>
                        <textarea cols="20" rows="4" placeholder=""></textarea>

                        <label htmlFor="">Prescription right header</label>
                        <textarea cols="20" rows="4" placeholder=""></textarea>
                        <button>Submit</button>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Prescription
