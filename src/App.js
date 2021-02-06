import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TextField from '@material-ui/core/TextField'

import reducers from './Reducers/index'
import Container from './Components/Container'
import './App.css';
import FavContainer from './Components/FavContainer'

const store = createStore(reducers);
function App() {

  
 
  return (
    <Provider store={store}>
      <>
        <div className="App">
          <div className='input'>
            <TextField 
              className='textField' 
              label="Enter Search"
              variant='outlined'
              color='secondary'
              />
          </div>
          <div>
            <FavContainer/>
          </div>
            <h1>This is woking out and i am Stoked!</h1>
            <Container/>
        </div>
      </>
    </Provider>

  );
}

export default App;
