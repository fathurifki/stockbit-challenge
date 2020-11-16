import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

import logo from './logo.svg';
import './App.css';

import loggerMiddleware from './utils/logger';
import monitorReducerEnhancer from './utils/monitorReducer';
import history from './utils/browserHistory'

function App() {

  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
  const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
  const store = createStore(rootReducer, undefined, composedEnhancers)

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
