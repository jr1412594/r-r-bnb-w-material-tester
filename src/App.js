import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './Reducers/index'
import Container from './Components/Container'
import './App.css';

const store = createStore(reducers);
function App() {
  
  
 
  return (
    <Provider store={store}>
      <div className="App">
          <Container/>
      </div>
    </Provider>
  );
}

export default App;
