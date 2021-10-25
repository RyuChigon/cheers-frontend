import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Initial,
  ChooseGame,
  ChooseCharacter,
} from '@/pages';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Initial />
      </Route>
      <Route exact path="/game">
        <ChooseGame />
      </Route>
      <Route exact path="/character">
        <ChooseCharacter />
      </Route>
    </Router>
  );
}

export default App;
