import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import getHash from '../../utils/getHash';
import ComicComponent from '../Comic';

import './index.css';

interface Comic {
    id: number;
    title: string;
    creator?: string;
    thumbnail: string;
}

export default function ComicsList() {
    let [comics, setComics] = useState<Array<Comic>>([]);
    let [loading, setLoading] = useState(true);

    async function getComics(): Promise<Array<Comic>>{
        let comics: Array<Comic> = [];
        let response = await api.get(
            `/comics?apikey=${process.env.REACT_APP_API_KEY}` + getHash()
        );

        let { data } = response.data;
        
        
        for (let comic of data?.results){
            comics.push({
                id: comic.id,
                title: comic.title,
                creator: comic.creators.available ? comic.creators.items[0]["name"] : null,
                thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
            } as Comic)
        }

        return comics;
    }

    useEffect(() => {
        if (loading){
            getComics()
                .then((comics) => {
                    setComics(comics)
                }
            );

            setLoading(false);
        }
    }, [loading]);

    return (
        <div className="comics-list">
            <div className="title">
                <h1>Últimas HQs</h1>
                <hr/>
            </div>
            <div className="comics-container">
                { 
                    !loading && comics.map(
                            (comic: Comic) => {
                                return(
                                <ComicComponent key={comic.id} comic={comic}/>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
