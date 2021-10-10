import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Initial from './Initial';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Initial />
      </Route>
    </Router>
  );
}

export default App;
