import React, { useContext, useState } from 'react'
import { Context } from '../../../App'
import GlobalSvgSelector from '../../UI/SvgSelector/GlobavSvgSelector'
import s from "./Header.module.scss"
import ProfilePopup from './ProfilePopup/ProfilePopup'

const Profile = () => {
	
	const PopupContext=useContext(Context)
	const {popup, setPopup}= PopupContext
	return (
		
		<div className={s.wrapperProfile}>
			<div className={s.notification}>
				<GlobalSvgSelector id='ring' />
			</div>
			<div className={s.profile} onClick={()=>setPopup(!popup)}>

				<img
					src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
					alt=''
				/>
				
					<GlobalSvgSelector id='poligon' />
				
			</div>
			<ProfilePopup popup={popup}/>
		</div>

	)
}

export default Profile