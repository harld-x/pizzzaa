import React from 'react';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Card } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/card" component={Card} exact />
      </div>
    </div>
  );
}

export default App;
