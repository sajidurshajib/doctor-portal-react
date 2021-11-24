import classes from './SettingsNav.module.css'

const SettingsNav = ({ menu, setMenu }) => {
    return (
        <div className={classes.SettingsNav}>
            <div className={classes.Wrap}>
                <h3>Settings</h3>
                <p className={menu === 1 ? classes.active : ''} onClick={() => setMenu(1)}>
                    Personal Information
                </p>
                <p className={menu === 2 ? classes.active : ''} onClick={() => setMenu(2)}>
                    Professional Information
                </p>
                <p className={menu === 3 ? classes.active : ''} onClick={() => setMenu(3)}>
                    Prescription
                </p>
                <p className={menu === 4 ? classes.active : ''} onClick={() => setMenu(4)}>
                    Password
                </p>
            </div>
        </div>
    )
}

export default SettingsNav
