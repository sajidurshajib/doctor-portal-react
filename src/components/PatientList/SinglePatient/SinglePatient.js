import defUser from '../../../assets/img/usericon.png'
import classes from './SinglePatient.module.css'

const SinglePatient = ({ data }) => {
    return (
        <div className={classes.SinglePatient}>
            <div
                style={{
                    background: `url(${defUser})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    border: `2px solid var(--grey2)`,
                    float: 'left',
                    marginRight: '10px',
                    marginTop: '5px',
                }}></div>
            <p>{data.name}</p>
            <p>
                <span>Sex: male</span>
                <span>Age: 27</span>
                <span>Phone: 01580354972</span>
            </p>
        </div>
    )
}

export default SinglePatient
