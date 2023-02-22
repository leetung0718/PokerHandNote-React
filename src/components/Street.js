import React, { useContext } from 'react'
import { Streets } from '../helpers/StreetInfo'
import { PokerContext } from '../helpers/Contexts'
import '../App.css'

function Street() {
    const { currStreet, setCurrStreet } = useContext(PokerContext)
    // function
    const prevStreet = () => {
        setCurrStreet(currStreet - 1);
    };

    const nextStreet = () => {
        setCurrStreet(currStreet + 1);
    };

    return (
        <div className='item'>
            {currStreet === 0 ?
                <button>{"<"}</button>
                :
                (<button onClick={prevStreet}>{"<"}</button>)
            }

            {Streets[currStreet].name}
            {/* if statement */}
            {currStreet === Streets.length - 1 ?
                (<button>{">"}</button>)
                :
                (<button onClick={nextStreet}>{">"}</button>)
            }
        </div>
    )
}

export default Street