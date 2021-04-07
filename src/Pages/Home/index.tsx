import React from 'react'
import ComicsList from '../../Components/ComicsList';
import Header from '../../Components/Header'
import Highlights from '../../Components/Highlights';
import MarqueeAnimation from '../../Components/MarqueeAnimation';
import { useTheme } from '../../context/ThemeContext';
import './index.css';

export default function Home() {
    const { isDark } = useTheme();
    return (
        <div style={isDark ? {} : {
            "--primary": "white",
            "--text": "black",
            "--sub-title": "rgba(1, 1, 1, 0.6)"
        } as React.CSSProperties}>
            <Header/>
            <main className="home-content">
                <div className="slider">
                    <div className="background">
                        <MarqueeAnimation/>
                    </div>
                    <div className="foreground">
                        <div className="welcome">
                            <hr/>
                            <h1>Bem-vindo ao Universo Marvel</h1>
                        </div>
                        <img src="/assets/captain.png" alt="Captain America"/>
                    </div>
                </div>
                <Highlights/>
                <ComicsList/>
            </main>
            <footer>

            </footer>
        </div>
    );
}
