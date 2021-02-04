import React from 'react'
import { useSelector } from 'react-redux'

export default function FavContainer() {
    const favCharacters = useSelector(state => state.myFav)
    console.log(favCharacters)
    
    return (
        <div>
            <p>Hello!</p>
        </div>
    )
}
