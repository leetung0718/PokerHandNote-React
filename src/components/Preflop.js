import React, { useContext, useState } from 'react'
import { PokerContext } from '../helpers/Contexts'

function Preflop() {
    const { pot, setPot } = useContext(PokerContext)
    const raise = (num) => {
        setPot(pot + num)
    }

    return (
        < div >
            <input type="text"></input>
            <button onClick={raise}>raise</button>
        </div >
    )
}

export default Preflop