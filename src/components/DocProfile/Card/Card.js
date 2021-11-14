import DocStock from '../../../assets/img/docstock.jpg'
import classes from './Card.module.css'

const Card = () => {
    return (
        <div>
            <div className={classes.Card}>
                <div
                    className={classes.DocImg}
                    style={{
                        background: `url('${DocStock}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>
                <div className={classes.title}>
                    <h3>Dr. Rashedul Islam</h3>
                    <p>Medicine Specialist</p>
                    <p>MBBS, FRCS</p>
                    <span></span>
                </div>
                <div className={classes.Chamber}>
                    <p>Main Chamber</p>
                    <p>121/2, Banasree, Dhaka. Uinit B and 5th Floor.</p>
                </div>
            </div>
            <div className={classes.BMDC}>
                <p>Registration/BMDC num</p>
                <p>65983</p>
            </div>
        </div>
    )
}

export default Card
