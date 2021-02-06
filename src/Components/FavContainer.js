import React from 'react'
import { useSelector } from 'react-redux'

import FavCaracterCard from './FavCaracterCard'

export default function FavContainer() {
    const favCharacters = useSelector(state => state.myFav)

    const renderFavCharacters = () => {
        return favCharacters.map(character => {
            return (
                <FavCaracterCard character={character} key={character.character.id} />
            )

        })
    }
    
    return (
        <div className='favContainer'>
            {renderFavCharacters()}
        </div>
    )
}
