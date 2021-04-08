import React, { createContext, useContext, useState } from 'react';
import Modal from '../Components/Modal';


interface ContextData {
    openModal: (comic: Comic) => void;
    closeModal: () => void;
}

interface Comic {
    id: number;
    title: string;
    description: string;
    creator?: string;
    thumbnail: string;
}

interface ComicProviderProps {
    children: React.ReactNode;
}

const ComicContext = createContext({} as ContextData);

export function useComic(){
    return useContext(ComicContext);
}

export default function ComicProvider({ children }: ComicProviderProps) {
    const [selectedComic, setSelectedComic] = useState({} as Comic);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(comic : Comic){
        setIsModalOpen(true);
        setSelectedComic(comic);
    }

    function closeModal(){
        setIsModalOpen(false);
    }

    let value = {
        openModal,
        closeModal
    }
    
    return (
        <ComicContext.Provider value={value}>
            { children }
            { isModalOpen && <Modal selectedComic={selectedComic}/>}
        </ComicContext.Provider>
    );
}
