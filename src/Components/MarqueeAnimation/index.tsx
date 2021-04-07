import React from 'react'
import './index.css';

export default function MarqueeAnimation() {
    return (
        <>
            <ul className="marquee-content">
                <li className="marquee-item"><img src="/assets/marquee/1.png" alt="Comics"/></li>
                <li className="marquee-item"><img src="/assets/marquee/2.png" alt="Comics"/></li>
                <li className="marquee-item"><img src="/assets/marquee/3.png" alt="Comics"/></li>
                <li className="marquee-item"><img src="/assets/marquee/1.png" alt="Comics"/></li>
                <li className="marquee-item"><img src="/assets/marquee/2.png" alt="Comics"/></li>
                <li className="marquee-item"><img src="/assets/marquee/3.png" alt="Comics"/></li>
            </ul>
            <div className="shadow"/>
        </>
    )
}
