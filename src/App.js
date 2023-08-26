import React from 'react';

import TrelloClone from './components/TrelloClone';
import { BoardProvider } from './components/BoardContext';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BoardProvider>
      <TrelloClone />
    </BoardProvider>
    </div>
  )
}

export default App