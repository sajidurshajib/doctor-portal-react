import classes from './AllChambers.module.css'

const AllChambers = () => {
    return (
        <div className={classes.AllChambers}>
            <h4>All Chambers</h4>
            <div className={classes.SingleChamber}>
                <p>Demo Chamber</p>
                <p>152/3 Mirpur, Dhaka</p>
            </div>
            <div className={classes.SingleChamber}>
                <p>Demo Chamber</p>
                <p>152/3 Mirpur, Dhaka</p>
            </div>
            <div className={classes.SingleChamber}>
                <p>Demo Chamber</p>
                <p>152/3 Mirpur, Dhaka</p>
            </div>
        </div>
    )
}

export default AllChambers
