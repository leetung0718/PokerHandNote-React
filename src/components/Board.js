import React, { useContext, useState } from 'react'
import Preflop from './Preflop'
import Flop from './Flop'
import Turn from './Turn'
import River from './River'
import { PokerContext } from '../helpers/Contexts'
import '../App.css'


function Board() {
    const { currStreet, setCurrStreet, pot, setPot } = useContext(PokerContext)

    return (
        <div>
            {currStreet === 0 && <Preflop />}
            {currStreet === 1 && <Flop />}
            {currStreet === 2 && <Turn />}
            {currStreet === 3 && <River />}
        </div>
    )
}

export default Board