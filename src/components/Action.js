import React, { useContext, useStatem, useRef } from 'react'
import { Streets } from '../helpers/StreetInfo'
import { PokerContext } from '../helpers/Contexts'
import '../App.css'


function Action() {
    const { currStreet, setCurrStreet, pot, setPot } = useContext(PokerContext);
    let StreetData = Streets[currStreet]
    // check
    const checkHandler = () => {
        { StreetData.action.push("check") }
    };
    // raise
    const raiseRef = useRef(null);
    const raiseHandler = () => {
        setPot(parseFloat(StreetData.pot) + parseFloat(raiseRef.current.value))
        { StreetData.pot = parseFloat(StreetData.pot) + parseFloat(raiseRef.current.value) }
        { StreetData.action.push("Player1 raise " + raiseRef.current.value + " bb") }
    };



    return (
        <div>
            <input type="text" ref={raiseRef} placeholder="$" />
            <button onClick={raiseHandler}>raise</button>
            <button onClick={checkHandler}>check</button>
        </div>
    )
}

export default Action