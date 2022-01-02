import n1 from '../../assets/img/notice1.jpg'
import n2 from '../../assets/img/notice2.jpg'
import n3 from '../../assets/img/notice3.jpg'
import classes from './Notice.module.css'

const Notice = () => {
    return (
        <div className={classes.Notice}>
            <div
                style={{
                    background: `url(${n1})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div>
                    <h4>Doctor Portal</h4>
                    <span>12 . 12 . 2012</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div
                style={{
                    background: `url(${n2})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div>
                    <h4>E-Chamber</h4>
                    <span>12 . 12 . 2012</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div
                style={{
                    background: `url(${n3})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div>
                    <h4>Patient Portal</h4>
                    <span>12 . 12 . 2012</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Notice
