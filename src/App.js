import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Card } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);
  // fetch('http://localhost:3000/db.json')
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setPizzas(json.pizzas);
  //   });

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/card" component={Card} exact />
      </div>
    </div>
  );
}

export default App;
