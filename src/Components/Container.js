import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import CaracterCard from './CaracterCard'
import Button from '@material-ui/core/Button'

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

    const renderCharacters = () => {
        return characters.map(character => {
            return (
                <CaracterCard character={character}/>
            )

        })
    }

    return (
        <div className='characterContainer'>
            {/* <Button className='button' >
                Hello World
            </Button> */}
            {renderCharacters()}
        </div>
    )
}
