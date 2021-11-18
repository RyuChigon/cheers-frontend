import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Initial,
  ChooseGame,
  ChooseCharacter,
  Main,
  MiniGame1,
  AdminMain,
  MiniGame2,
  MainPrior,
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
      <Route exact path="/main">
        <Main />
      </Route>
      <Route exact path="/mainprior">
        <MainPrior />
      </Route>
      <Route exact path="/minigame1">
        <MiniGame1 />
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
