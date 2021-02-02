import React from 'react'


export default function CaracterCard({character}) {
    return (
        <div className='characterCard'>
            <h2 className ='characterName'>{character.name}</h2>
            <img className='characeterImage' src={character.image} alt={character.name}/>
            <div className='characterInfoContainer'>
                <h3 className='characterLocation'>{character.location.name}</h3>
                <h3 className='characterSpecies'>{character.species}</h3>
                <h3 className='characterStatus'>{character.status}</h3>
            </div>
        </div>
    )
}
