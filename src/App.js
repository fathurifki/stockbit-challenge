import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

import loggerMiddleware from './utils/logger';
import monitorReducerEnhancer from './utils/monitorReducer';
import history from './utils/browserHistory'
import AppRoutes from './routes'
import CustomRoute from './components/Route'

function App() {

  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
  const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
  const store = createStore(rootReducer, undefined, composedEnhancers)

  return (
    <div className="bg-gray-300">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {AppRoutes.map(({ path, component }, key) =>
              <CustomRoute
                exact
                path={path}
                component={component}
                key={key}
              />
            )}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
