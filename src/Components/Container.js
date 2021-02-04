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

    // const addFave = (characters) => {
    //     dispatch({ type: 'FAVCHARACTER', myFav: characters})
    //     console.log(characters,'here')
    // }

    const renderCharacters = () => {
        return characters.map(character => {
            return (
                <CaracterCard character={character} key={character.id} />
            )

        })
    }

    return (
        <div className='characterContainer'>
            {renderCharacters()}
        </div>
    )
}
