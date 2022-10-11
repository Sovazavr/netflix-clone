import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from "./Home.module.scss"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { CSSTransition } from 'react-transition-group';
import Films from '../Films/Films';


const Home = () => {
    const [id, setId] = useState(1)
    const [isloading, setIsLoading] = useState(false)
    const posters = [
        {
            name: 'The Walking Dead',
            body: 'one',
            estim: 7.5,
            img: 'https://www.wallpapersdsc.net/wp-content/uploads/2015/10/The_Walking_Dead_17.jpg',
        },
        {
            name: 'The Witcher',
            body: 'two',
            estim: 8.5,
            img: 'https://witcher-tv.ru/wp-content/uploads/2020/02/3nd-geralt-poster-4k.jpg',
        },
        {
            name: 'Queen\'s Gambit',
            body: 'three',
            estim: 5.5,
            img: 'https://image.tmdb.org/t/p/original/jweDN93wtbUgg2eO8eYTWV6QriS.jpg',
        },
    ]



    const block = document.getElementById('block');
    console.log(block)
    



    return (

        <>
            <div id='block' className={s.posters} style={{backgroundImage: `url(${posters[id].img})`}}>

                <img src='' />
                <div className={s.wrapper}>

                    <div className={s.poster}>
                        {id > 0 && <ArrowBackIosRoundedIcon className={s.prev} onClick={()=>setId(id-1)}/>}
                        <div className={s.text}>
                            <h1>{posters[id].name}</h1>
                            <div>{posters[id].body}</div>
                            <div>{posters[id].estim}</div>
                        </div>

                        {id < posters.length - 1 && <ArrowForwardIosRoundedIcon className={s.next} onClick={()=>setId(id+1)}/>}
                    </div>




                </div>
            </div>
            <Films/>

        </>

    )
}

export default Home