import React from 'react'

export default function FavCaracterCard({character}) {

    console.log(character, 'fave container')
    return (
        <div className='favCharacterCard'>
            <h2>{character.character.name}</h2>
            <img src={character.character.image} alt={character.name}/>
        </div>
    )
}
