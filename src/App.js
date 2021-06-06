import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Card } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

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
