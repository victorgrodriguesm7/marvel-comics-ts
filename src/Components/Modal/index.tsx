import React from 'react'
import { useComic } from '../../context/ComicContext'
import { useTheme } from '../../context/ThemeContext';
import './index.css';

interface ModalProps {
    selectedComic: Comic;
}

interface Comic {
    id: number;
    title: string;
    description: string;
    creator?: string;
    thumbnail: string;
}

export default function Modal({ selectedComic }: ModalProps) {
    let { closeModal } = useComic();
    let { isDark } = useTheme();
    return (
        <div className="overlay" style={isDark ? {} : {
            "--primary": "white",
            "--text": "black",
            "--sub-title": "rgba(1, 1, 1, 0.6)"
        } as React.CSSProperties}>
            <div className="container">
                <button type="button" onClick={closeModal}>
                    <img src="/assets/close.svg" alt="Close Modal"/>
                </button>
                <img src={selectedComic.thumbnail} alt="Selected Comic thumb" className="card"/>
                <div className="content">
                    <div className="title">
                        <h1>{selectedComic.title}</h1>
                        <hr/>
                        <p className="creator">{selectedComic.creator}</p>
                        <p className="description" dangerouslySetInnerHTML={{__html: selectedComic.description}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
