import React, {useState} from 'react'
import './RangeInput.scss'
import {ThemeContext} from "../../themeContext";

const RangeInput = ({withPercent, rangeList, measure}) => {
    const {theme} = React.useContext(ThemeContext)
    const [value, setValue] = useState(0)
    const id = Math.floor(Math.random() * (100 - 1) + 1)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const percentHandle = (e) => {
        let val = e.target.value
        if (val < 0) {
            val = 0
        }
        if (val > 100) {
            val = 100
        }
        setValue(val.toString().match(/^\d+\.?\d{0,2}/))
    }

    //обработка шкалы
    const DataList = (list) => {
        return (
            <div className={'range-input__datalist'}>
                <datalist className={'range-input__list'} id={id}>
                    {list.map((val, index) =>
                        <option className={`${value >= val ? 'checked' : ''}
                                            ${theme === 'light' ? 'light' : ''}
                                           `}
                                key={index}
                                value={val}
                        />
                    )}
                </datalist>
                <span style={{width: value + '%'}} className={'range-input__progress'}/>
            </div>
        )
    }

    return (
        <div className={'range-input'}>
            <div
                className={'p-md dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-none border-solid border border-gray-200 dark:border-gray-400 flex items-center'}>
                <div className={'range-input__container'}>
                    <input
                        className={`range-input__input ${theme === 'light' ? 'light' : ''}`}
                        type={'range'}
                        min={0}
                        max={100}
                        value={value}
                        list={id}
                        step={.01}
                        onChange={handleChange}
                    />

                    {rangeList &&
                    DataList(rangeList)
                    }
                </div>
                {withPercent &&
                <div className={'range-input__percents relative text-black dark:text-white'}>
                    <input
                        className={'text-tiny p-sm rounded-lg border-solid border border-gray-200 dark:border-gray-400'}
                        type={'text'}
                        pattern={'/^-?\d*[.]?\d*$/'}
                        value={value}
                        onChange={percentHandle}
                    />
                    <span className={'absolute top-1/2 right-0 transform -translate-y-2/4 text-tiny'}>{measure}</span>
                </div>
                }
            </div>
        </div>
    )
}

export default RangeInput
