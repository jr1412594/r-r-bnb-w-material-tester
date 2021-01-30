import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Button from '@material-ui/core/Button'

const baseUrl = 'https://rickandmortyapi.com/api/character'



export default function Container() {
    // const characters = useSelector(state => state.anything)
    const dispatch = useDispatch();
    const grab = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(({results}) => dispatch({ type: 'CHARACTERS', characters: results }))
    }

    useEffect(() => {
        grab()
    }, [])

    // const renderCharacters = () => {
    //     return characters.map(character => {
    //         // console.log(character.name, 'here')
    //         return character.name

    //     })
    // }

    return (
        <div>
            <Button variant='contained' color='primary'>
                Hello World
            </Button>
            {/* {renderCharacters()} */}
        </div>
    )
}
