import React, { useContext } from 'react'
import { Streets } from '../helpers/StreetInfo'
import { PokerContext } from '../helpers/Contexts'
import '../App.css'

function Turn() {
    const { currStreet, setCurrStreet, pot, setPot } = useContext(PokerContext)
    let StreetData = Streets[currStreet]
    const listItems = StreetData.action.map((number) =>
        <li>{number}</li>
    );

    return (
        < div >
            <div>Pot: {StreetData.pot + Streets[currStreet - 1].pot + Streets[currStreet - 2].pot} bb</div>
            <ul>{listItems}</ul>
        </div >
    )
}

export default Turn