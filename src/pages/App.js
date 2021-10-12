import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Initial,
  ChooseGame,
} from '@/pages';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Initial />
      </Route>
      <Route exact path="/choosegame">
        <ChooseGame />
      </Route>
    </Router>
  );
}

export default App;
