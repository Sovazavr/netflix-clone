import React, { useContext, useEffect } from 'react'
import { Context } from '../../../App'

import s from "./MyList.module.scss"
const MyList = () => {

    const MyListContext=useContext(Context)

    const {myList, setMyList}=MyListContext

    const deleteFilm=(elem)=>{
        setMyList(myList.filter(p => p.body !== elem.body))
    }
    useEffect(() => {
        {myList.length === 0
            ?
            <div className={s.textNone}>Вы не добавили не одного фильма</div>
            :
            myList.map((elem) =>
                <div className={s.film}>
                    <div>
                        <img className={s.prew} src={elem.preview} />

                        <div className={s.text}>{elem.name}</div>
                    </div>
                    <div className={s.body}>
                        <p>Описание:</p>
                        <div className={s.title}>{elem.body}</div>
                    </div>
                    <button className={s.delete} onClick={()=>deleteFilm(elem)}>-</button>
                </div>)}
    }, []);
    return (
        <div className={s.list}>
            
            {myList.length === 0
                ?
                <div className={s.textNone}>Вы не добавили не одного фильма</div>
                :
                myList.map((elem) =>
                    <div className={s.film}>
                        <div>
                            <img className={s.prew} src={elem.preview} />

                            <div className={s.text}>{elem.name}</div>
                        </div>
                        <div className={s.body}>
                            <p>Описание:</p>
                            <div className={s.title}>{elem.body}</div>
                        </div>
                        <button className={s.delete} onClick={()=>deleteFilm(elem)}>-</button>
                    </div>)}
        </div>
    )


}

export default MyList