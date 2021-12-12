import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { Auth, UserInfo } from '../../../allContext'
import DocStock from '../../../assets/img/docstock.jpg'
import { api } from '../../../config.json'
import classes from './Card.module.css'

const Card = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const [profile, setProfile] = useState('')

    let { id } = useParams()

    useEffect(() => {
        const InsideFunction = async () => {
            if (id && stateAuth.auth) {
                let othersProfile = await fetch(`${api}/users/`)
                let a = await othersProfile.json()
                let f = a.filter((v) => v.id === parseInt(id))
                setProfile(f[0])
            } else if (id) {
                let othersProfile = await fetch(`${api}/users/`)
                let a = await othersProfile.json()
                let f = a.filter((v) => v.id === parseInt(id))
                setProfile(f[0])
            } else if (stateAuth.auth) {
                setProfile(stateUser.info)
            }
        }
        InsideFunction()
    }, [setProfile, stateAuth, stateUser, id])

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
