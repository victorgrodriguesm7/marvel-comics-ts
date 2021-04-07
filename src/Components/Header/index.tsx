import React from 'react'
import Switch from 'react-switch';
import { useTheme } from '../../context/ThemeContext';
import './index.css';

export default function Header() {
    let {changeTheme, isDark } = useTheme()
    return (
        <header className="header">
            <div className="left">
                <img src="logo.svg" alt="Marvel Logo" className="logo"/>
                <h1 className="title">Home</h1>
            </div>
            <div className="right">
                <Switch
                    onChange={changeTheme}
                    checked={isDark}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor={"#121212"}
                    offColor={"#fff"}
                    offHandleColor={"#121212"}
                    height={15}
                    width={30}
                />
            </div>
        </header>
    )
}
