import React, { useContext, useEffect } from 'react'
import { Context } from '../../../../App'
import s from "./ProfilePopup.module.scss"

const ProfilePopup = () => {
    const PopupContext = useContext(Context)
    const { popup, setPopup } = PopupContext
    const rootClasses = [s.popup]
    if (popup) {
        rootClasses.push(s.active)
    }
    useEffect(() => {
        function scrollPopup() {
            setPopup(false)
        }
        if (popup) {
            window.addEventListener('scroll', scrollPopup)
            return () => window.removeEventListener('scroll', scrollPopup)
        }

    }, [popup]);
    return (
        <div className={rootClasses.join(' ')} onClick={() => setPopup(false)}>
            <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <div>Поле 1</div>
                <div>Поле 2</div>
                <div>Поле 3</div>
                <div>Поле 4</div>
            </div>
        </div>
    )
}

export default ProfilePopup