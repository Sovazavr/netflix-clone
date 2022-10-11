import React from 'react'
import { Link } from 'react-router-dom'
import Hr from '../../UI/HR/Hr'
import Search from '../../UI/Search/Search'
import s from "./Header.module.scss"
import Profile from './Profile'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <a href='/'>
                        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" height='35' width='112' />
                        {/* ../../../resurses/image/netflix */}
                    </a>
                    <Search />
                </div>
                <div className={s.navpanel}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/list"><p>My list</p></Link>
                    <Profile />
                </div>
            </div>
            <Hr />
        </div>
    )
}

export default Header