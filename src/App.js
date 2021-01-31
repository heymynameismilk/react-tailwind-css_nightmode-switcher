import React from "react";
import './App.css';
import RangeInput from "./components/RangeInput/RangeInput";
import Switcher from "./components/Switcher/Switcher";
import {ThemeProvider} from "./themeContext"

function App() {
    return (
        <ThemeProvider>
            <div className={'dark:bg-gray-900 text-white h-screen flex justify-center transition-all ease-in-out duration-500 items-center'}>
                <div className={'flex justify-center items-center'}>
                    <Switcher/>
                    <RangeInput
                        withPercent
                        measure={'%'}
                        rangeList={[0, 25, 50, 75, 100]}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
