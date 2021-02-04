import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import CaracterCard from './CaracterCard'


const baseUrl = 'https://rickandmortyapi.com/api/character'



export default function Container() {
    const characters = useSelector(state => state.anything);
    const dispatch = useDispatch();
    const grab = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(({results}) => dispatch({ type: 'CHARACTERS', characters: results }))
    }

    useEffect(() => {
        grab()
    }, [])

    const addFave = (character) => {
        console.log(character,'here')
        dispatch({ type: 'FAVCHARACTER', myFav: character})
    }

    const renderCharacters = () => {
        return characters.map(character => {
            return (
                <CaracterCard character={character} key={character.id} onClick={addFave}/>
            )

        })
    }

    return (
        <div className='characterContainer'>
            {renderCharacters()}
        </div>
    )
}
