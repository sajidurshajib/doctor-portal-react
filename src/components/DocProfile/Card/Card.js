import { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { Auth } from '../../../allContext'
import DocStock from '../../../assets/img/docstock.jpg'
import classes from './Card.module.css'

const Card = () => {
    const { stateAuth } = useContext(Auth)
    const [profile, setProfile] = useState('')

    useEffect(() => {
        let funFetch = async () => {
            let logFetch = await fetch('me/', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                dataType: 'json',
                method: 'GET',
            })

            let log = await logFetch.json()
            setProfile(log)
        }
        funFetch()
    }, [stateAuth])

    console.log(profile)

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
                    <h3>{profile.user?.name}</h3>
                    <p>
                        {profile.specialities?.map((v, i) => {
                            return <span key={i}>{`${v.name}${i !== 1 ? ', ' : ''}`}</span>
                        })}
                    </p>
                    <p>{profile.qualification}</p>
                    <span></span>
                </div>
                <div className={classes.Chamber}>
                    <p>Main Chamber</p>
                    <p>121/2, Banasree, Dhaka. Uinit B and 5th Floor.</p>
                </div>
            </div>
            <div className={classes.BMDC}>
                <p>Registration/BMDC num</p>
                <p>{profile.bmdc_number}</p>
            </div>
        </div>
    )
}

export default Card
