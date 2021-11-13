import classes from './SingleDoctor.module.css'

const SingleDoctor = ({ data }) => {
    return (
        <div className={classes.SingleDoctor}>
            <div
                style={{
                    background: `url(${data.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: `3px solid var(--grey2)`,
                    float: 'left',
                    marginRight: '10px',
                    marginTop: '5px',
                }}></div>
            <p>{data.name}</p>
            <p>Medicine Speciality</p>
            <p>MBBS, FRCS</p>
        </div>
    )
}

export default SingleDoctor
