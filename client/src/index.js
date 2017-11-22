import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

class Main extends Component {
   render() {
      return (
         <Provider store={store}>
            <App />
         </Provider>
      )
   }
}
ReactDOM.render(<Main />, document.getElementById('root'));
