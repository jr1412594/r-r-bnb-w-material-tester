import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import InputBase from '@material-ui/core/InputBase'

import reducers from './Reducers/index'
import Container from './Components/Container'
import './App.css';

const store = createStore(reducers);
function App() {
  
  
 
  return (
    <Provider store={store}>
      <>
      <div className='input'>
          <InputBase 
            className='inputBase' 
            placeholder="Enter here"
            />
      </div>
      <div className="App">
        <h1>This is woking out and i am Stoked!</h1>
          <Container/>
      </div>
      </>
    </Provider>

  );
}

export default App;
