import doc1 from '../../assets/img/doc1.png'
import doc2 from '../../assets/img/doc2.png'
import doc3 from '../../assets/img/doc3.png'
import classes from './Doctors.module.css'
import SingleDoctor from './SingleDoctor/SingleDoctor'

const Doctors = () => {
    return (
        <div className={classes.Doctors}>
            <SingleDoctor data={{ img: doc1, name: 'Dr. Faysal Ahmed', sex: 'male', age: 27, phone: '01580354972' }} />
            <SingleDoctor data={{ img: doc2, name: 'Dr. Chayan', sex: 'male', age: 27, phone: '01580354972' }} />
            <SingleDoctor data={{ img: doc3, name: 'Dr. Eli Rahima', sex: 'male', age: 27, phone: '01580354972' }} />
        </div>
    )
}

export default Doctors
