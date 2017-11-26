import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(
   reducers,
   {},
   applyMiddleware(Thunk)
);

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
