import React from 'react'
import { useComic } from '../../context/ComicContext'
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

    return (
        <div className="overlay">
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
