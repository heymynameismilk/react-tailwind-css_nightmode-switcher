import React from 'react'
import './Switcher.scss'
import {ReactComponent as MoonIcon} from '../../assets/icons/moon.svg'
import {ReactComponent as SunIcon} from '../../assets/icons/sun.svg'
import {ThemeContext} from "../../themeContext";

const Switcher = () => {
    const {theme, setTheme} = React.useContext(ThemeContext)

    const toggle = [
        theme === 'dark' ? 'transform translate-y-full' : 'transform translate-y-0'
    ].join(' ')

    return (
        <div className={'switcher'}>
            <label className={'bg-gray-300 cursor-pointer dark:bg-gray-400 rounded-lg relative'}>
                <input
                    className={'hidden'}
                    type={'checkbox'}
                    checked={theme === "light" ? true : ""}
                    onChange={e => setTheme(e.target.checked ? "light" : "dark")}
                />
                <span
                    className={`dark:bg-gray-900 shadow-md dark:shadow-none bg-white border h-1/2 block w-full border-gray-200 transition-all ease-in-out duration-500 absolute rounded-lg ${toggle}`}/>
                <div
                    className={'absolute text-gray-700  dark:text-gray-100 bottom-sm left-1/2 transform -translate-x-2/4'}>
                    <MoonIcon/>
                </div>
                <div className={'absolute text-black dark:text-gray-100 top-sm left-1/2 transform -translate-x-2/4'}>
                    <SunIcon/>
                </div>
            </label>
        </div>
    )
}

export default Switcher
