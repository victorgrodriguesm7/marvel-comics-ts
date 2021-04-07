import React from 'react'
import './index.css';

export default function Highlights() {
    return (
        <>
            <div className="title">
                <h1>Destaques</h1>
                <hr/>
            </div>
            <div className="hightlight">
                <div className="left">
                    <img src="/assets/spider-man.png" alt="Spider man"/>
                    <div className="title">
                        <h1>Homem-Aranha: De volta ao lar</h1>
                        <hr/>
                        <h2>Jon Watts</h2>
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Quarteto Fantástico: Surfista Prateado</h1>
                        <hr/>
                        <h2>Tim Storv</h2>
                    </div>
                    <img src="/assets/silver-surfer.png" alt="Silver Surfer"/>
                </div>
            </div>
        </>
    )
}
