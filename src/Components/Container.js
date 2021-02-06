import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import CaracterCard from './CaracterCard'

const baseUrl = 'https://rickandmortyapi.com/api/character'

export default function Container() {
    const characters = useSelector(state => state.anything);
    const myFav = useSelector(state => state.myFav)
    const dispatch = useDispatch();

    const grabRickAndMortyCharacters = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(({results}) => dispatch({ type: 'CHARACTERS', characters: results }))
    }

    useEffect(() => {
        grabRickAndMortyCharacters()
    }, []);

    
    const renderCharacters = () => {
        return characters.map(character => {
            return (
                <CaracterCard character={character} key={character.id} myFav={myFav} />
            )
        })
    }

    return (
        <div className='characterContainer'>
            {renderCharacters()}
        </div>
    )
}
