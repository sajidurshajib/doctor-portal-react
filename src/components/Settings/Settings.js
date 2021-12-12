import { useState } from 'react'
import SideNav from '../SideNav/SideNav'
import Chamber from './Chamber/Chamber'
import General from './General/General'
import Password from './Password/Password'
import Prescription from './Prescription/Prescription'
import Professional from './Professional/Professional'
import classes from './Settings.module.css'
import SettingsNav from './SettingsNav/SettingsNav'
import Speciality from './Speciality/Speciality'

const Settings = () => {
    const [setting, setSetting] = useState(1)

    return (
        <div className={classes.Wrapper}>
            <SideNav />
            <div className={classes.Settings}>
                <div>
                    <SettingsNav menu={setting} setMenu={setSetting} />
                </div>
                {setting === 1 ? <General /> : null}
                {setting === 2 ? <Professional /> : null}
                {setting === 3 ? <Speciality /> : null}
                {setting === 4 ? <Prescription /> : null}
                {setting === 5 ? <Chamber /> : null}
                {setting === 6 ? <Password /> : null}
            </div>
        </div>
    )
}

export default Settings
