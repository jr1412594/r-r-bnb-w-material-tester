import React from 'react'
import { useSelector } from 'react-redux'

import FavCaracterCard from './FavCaracterCard'

export default function FavContainer() {
    const favCharacters = useSelector(state => state.myFav)
    console.log(favCharacters, 'this')

    const renderFavCharacters = () => {
        return favCharacters.map(character => {
            return (
                <FavCaracterCard character={character} key={character.id} />
            )

        })
    }
    
    return (
        <div>
            {renderFavCharacters()}
        </div>
    )
}
