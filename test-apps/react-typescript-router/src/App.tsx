import React, { useState, useEffect } from 'react';
import './App.css';
import TestComponent from './components/test';
import axios from 'axios';
import { hostName } from './hostName';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let [title, setTitle] = useState('');
  let [paragraph, setParagraph] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('/api')
  //     .then((res) => {
  //       setTitle(res.data.title);
  //       setParagraph(res.data.paragraph);
  //     })
  //     .catch((err) => console.log(err.message));
  // });

  function fetchStoreItems() {
    axios
      .get(hostName + '/api/v1/products')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }

  return (
    <Router>
      <Switch>
        <Route path="/app2">
          <div>
            Console log data from the store
            <button onClick={() => fetchStoreItems()}>Test</button>
          </div>
        </Route>
        <Route path="/app3">
          <TestComponent title={title} paragraph={paragraph} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
