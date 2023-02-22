import React, { useContext, useState } from 'react'
import { PokerContext } from '../helpers/Contexts'
import '../App.css'

function Action() {
    const { currStreet, setCurrStreet, pot, setPot } = useContext(PokerContext)

    return (
        <div className='item'>
            <div className='column'>
                Player1
            </div>
            <div className='column'>
                player2
            </div>
        </div>
    )
}

export default Action