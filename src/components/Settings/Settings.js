import { useState } from 'react'
import SideNav from '../SideNav/SideNav'
import General from './General/General'
import Password from './Password/Password'
import Prescription from './Prescription/Prescription'
import Professional from './Professional/Professional'
import classes from './Settings.module.css'
import SettingsNav from './SettingsNav/SettingsNav'

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
                {setting === 3 ? <Prescription /> : null}
                {setting === 4 ? <Password /> : null}
            </div>
        </div>
    )
}

export default Settings
