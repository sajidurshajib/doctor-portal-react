import DocStock from '../../../assets/img/docstock.jpg'
import classes from './SubProfile.module.css'

const SubProfile = () => {
    return (
        <div className={classes.SubProfile}>
            <div className={classes.Wrapper}>
                <div>
                    <div className={classes.ImgWrap}>
                        <div
                            className={classes.DocImg}
                            style={{
                                background: `url('${DocStock}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}></div>
                    </div>
                    <div className={classes.NameWrap}>
                        <p>Dr. Rashadul Islam</p>
                        <p>MBBS, FRCS</p>
                        <p>Medicine Specialist</p>
                    </div>
                </div>
                <div>
                    <h3>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi, culpa obcaecati odio
                        iure exercitationem quo temporibus a ipsam labore rerum laudantium, voluptatem quibusdam iusto
                        tempore porro consequatur facilis fugiat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SubProfile
