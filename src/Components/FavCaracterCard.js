import React from 'react'

export default function FavCaracterCard({character}) {

    return (
        <div className='favCharacterCard'>
            <h2>{character.character.name}</h2>
            <img src={character.character.image} alt={character.name}/>
            <div>
                <h3>{character.character.location.name}</h3>
                <h3>{character.character.species}</h3>
                <h3>{character.character.status}</h3>
            </div>
        </div>
    )
}
