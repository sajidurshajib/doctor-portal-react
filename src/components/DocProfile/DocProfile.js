import ViewSchedule from '../Schedule/ViewSchedule/ViewSchedule'
import SideNav from '../SideNav/SideNav'
import AllChambers from './AllChamber/AllChambers'
import Card from './Card/Card'
import classes from './DocProfile.module.css'
import Professional from './Professional/Professional'
import Schedule from './Schedule/Schedule'

const DocProfile = () => {
    return (
        <div className={classes.DocProfile}>
            <SideNav />
            <div className={classes.Wrapper}>
                <Card />
                <div className={classes.Details}>
                    <Professional />
                    <ViewSchedule />
                </div>
                <div>
                    <Schedule />
                    <AllChambers />
                </div>
            </div>
        </div>
    )
}

export default DocProfile
