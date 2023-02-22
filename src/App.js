import React, { useState } from 'react';
import Board from './components/Board';
import Action from './components/Action';
import Street from './components/Street';
import { PokerContext } from './helpers/Contexts';
import './App.css';

function App() {
  // 紀錄目前應該渲染的頁面
  const [currStreet, setCurrStreet] = useState(0);
  const [pot, setPot] = useState(0)

  return (
    <div className="App">
      {/* App Title */}
      <h1 className='title'>Poker Note</h1>
      <PokerContext.Provider value={{ currStreet, setCurrStreet, pot, setPot }}>
        {/* App */}
        <div className='container'>
          {/* Street Title */}
          <div className='row'>
            <Street />
          </div>

          {/* Board */}
          <div className='row'>
            <Board />
          </div>

          {/* Action */}
          <div className='row-bottom'>
            <Action />
          </div>
        </div>
      </PokerContext.Provider>
    </div>
  );
}

export default App;
