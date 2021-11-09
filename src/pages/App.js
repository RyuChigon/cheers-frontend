import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Initial,
  ChooseGame,
  ChooseCharacter,
  Main,
  MinigameOne,
} from '@/pages';

import AdminChooseGame from './AdminChooseGame/AdminChooseGame';
import AdminMain from './AdminMain/AdminMain';
import MiniGame2 from './MiniGame2/MiniGame2';

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
      <Route exact path="/main">
        <Main />
      </Route>
      <Route exact path="/minigameone">
        <MinigameOne />
      </Route>
      <Route exact path="/admin/game">
        <AdminChooseGame />
      </Route>
      <Route exact path="/admin/main">
        <AdminMain />
      </Route>
      <Route exact path="/minigame2">
        <MiniGame2 />
      </Route>
    </Router>
  );
}

export default App;
