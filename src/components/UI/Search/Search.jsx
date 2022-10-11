import React from 'react'
import s from "./Search.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Paper } from '@mui/material';
import GlobalSvgSelector from '../SvgSelector/GlobavSvgSelector';


const Search = () => {
    return (
        <div className={s.search}>
            <div>
                <GlobalSvgSelector id='searchIcon'/>
                <input type='text' placeholder='Я ищу...' />
            </div>
            <GlobalSvgSelector id='filter'/>
        </div>
    )
}

export default Search