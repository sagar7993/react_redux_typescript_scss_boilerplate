import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import { MyWindow } from './Contracts';

import WrappingComponent from './Components/HigherOrderComponents/WrappingComponent';
import { MyRoutingModule } from './Containers/Routing';

import { MyReducer } from './Reducers';

declare var window: MyWindow;

import './App.css';

const middleWare: Array<any> = [ReduxThunk];
let composeEnhancers = compose;

if (process.env.REACT_APP_NODE_ENV === 'development') {
  middleWare.push(ReduxLogger);
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (devToolsExtension && typeof devToolsExtension === 'function') {
    composeEnhancers = devToolsExtension || compose;
  }
}

const store = createStore(combineReducers({
  reducer: MyReducer
}), composeEnhancers(applyMiddleware(...middleWare)));

class App extends React.Component {
  public render() {
    return (
      <WrappingComponent>
        <Provider store={store}>
          <BrowserRouter>
            <MyRoutingModule />
          </BrowserRouter>
        </Provider>
      </WrappingComponent>
    );
  }
}

export default App;
