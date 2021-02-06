import React from 'react'
import { useDispatch } from 'react-redux'


export default function CaracterCard({ character, myFav }) {
    // const myFav = useSelector(state => state.myFav)
    const dispatch = useDispatch();

    const addFave = () => {
        console.log(myFav, 'what')
        if(!myFav.find(fave => fave.id === character.id)) {
            dispatch({ type: 'FAVCHARACTER', myFav: {character}})
        }
    }

    return (
        <div className='characterCard' onClick={addFave} >
            <h2 className ='characterName'>{character.name}</h2>
            <img className='characterImage' src={character.image} alt={character.name}/>
            <div className='characterInfoContainer'>
                <h3 className='characterLocation'>{character.location.name}</h3>
                <h3 className='characterSpecies'>{character.species}</h3>
                <h3 className='characterStatus'>{character.status}</h3>
            </div>
        </div>
    )
}
