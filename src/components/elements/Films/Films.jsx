import { InterpreterMode } from '@mui/icons-material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../../App'
import { films } from '../../../resurses/FilmsBase/FilmsBase'

import s from "./Films.module.scss"

const Films = () => {


    const MyListContext = useContext(Context)
    const { myList, setMyList } = MyListContext 
    const categories = [
        {
            category: 'Action',
            activated: false,
        },
        {
            category: 'Adventure',
            activated: false,
        },
        {
            category: 'Animation',
            activated: false,
        },
        {
            category: 'Biography',
            activated: false,
        },
        {
            category: 'Crime',
            activated: false,
        },
        {
            category: 'Comedy',
            activated: false,
        },
        {
            category: 'Documentary',
            activated: false,
        },
        {
            category: 'Drama',
            activated: false,
        },
        {
            category: 'Melodrama',
            activated: false,
        },
        {
            category: 'Thriller',
            activated: false,
        },
        {
            category: 'Fantasy',
            activated: false,
        },
        {
            category: 'History',
            activated: false,
        },
    ]
    const [categoryState, setCategoryState]=useState(categories)
    const [activeCategory, setActiveCategory]=useState([])

   
    const scr = useRef();


    useEffect(() => {
        const el = scr.current

        if (el) {

            const onWheel = (e) => {
                e.preventDefault()
                el.scrollTo(
                    {
                        left: el.scrollLeft + e.deltaY * 4,

                        behavior: 'smooth',
                    }
                )
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
        

    }, [])
    
    const filterFilms=()=>{
        const newFilms=films.filter(item=> item.categories.includes(['Action', 'Crime', 'Comedy']))
        console.log('films',newFilms)
    }



    const activate = (index) => {
        categories[index].activated = !categories[index].activated
        let foo = document.querySelectorAll("button");
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].activated) {
                foo[i].classList.add(s.active)
            } else { foo[i].classList.remove(s.active) }
        }
        
        // setCategoryState(categories)
        // setActiveCategory(categoryState.filter(item=>item.activated))
        filterFilms()
    }
    let result = []
    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(myList))
        let keysSelectedFilter = categories.filter(i => i.activated).map(i => i.category)
        result = films.filter(i =>
            i.categories.some(k =>
                keysSelectedFilter.includes(k)
            )
        )
        
    }, [myList, categoryState])
    const addList = (film) => {

        setMyList([...myList, film])
    }
    const removeList = (film) => {
        const searchItem = myList.find((item, index) =>
            item.name === film.name
        )
        if (searchItem) {
            myList.splice(searchItem, 1)
        }
    }


    //style={{backgroundImage: `url(${film.preview})`}}
    return (
        <div className={s.wrapper}>
            <div className={s.button_block}>
                {categories.map((category, index) =>
                    <button id={category.category} className={s.button} onClick={() => activate(index)}>
                        {category.category}
                    </button>)}
            </div>
            <hr />

            <div ref={scr} className={s.listener_block}>
                {films.map(film =>
                    <div className={s.film} style={{ backgroundImage: `url(${film.preview})` }}>
                        {/* <img src={film.preview}/> */}

                        <div className={s.text}>{film.name}</div>
                        {myList.find((item => item.name === film.name))
                            ? null// ? <button className={s.add} onClick={() => removeList(film)}>delete list</button>
                            : <button className={s.add} onClick={() => addList(film)}>+ add list</button>
                        }


                    </div>)}
            </div>

        </div>
    )
}

export default Films