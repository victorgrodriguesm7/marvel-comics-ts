import React from 'react'
import { useComic } from '../../context/ComicContext';
import './index.css';

interface ComicComponentProps {
    comic: Comic;
}

interface Comic {
    id: number;
    title: string;
    description: string;
    creator?: string;
    thumbnail: string;
}

export default function ComicComponent({ comic }: ComicComponentProps) {
    let { id, title, creator, thumbnail } = comic;
    let { openModal } = useComic();
    return (
        <div key={id} className="comic" onClick={() => openModal(comic)}>
            <img src={thumbnail} alt={`${title} thumbnail`}/>
            <div className="title">
                <h2>{ title }</h2>
                <hr/>
                <p> { creator }</p>
            </div>
        </div>
    )
}
